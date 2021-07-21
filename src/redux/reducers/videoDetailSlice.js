import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../helpers/axios';

export const fetchVideoDetail = createAsyncThunk(
  'videoDetail/fetch',
  async ({ videoId }, thunkAPI) => {
    const { data } = await axiosInstance.get('/videos', {
      params: {
        part: 'snippet,contentDetails,statistics',
        id: videoId,
      },
    });
    const [item] = data.items;

    const { data: channelData } = await axiosInstance.get('/channels', {
      params: {
        part: 'snippet,statistics',
        id: item.snippet.channelId,
      },
    });

    const { data: relatedVideos } = await axiosInstance.get('/search', {
      params: {
        part: 'snippet',
        type: 'video',
        relatedToVideoId: videoId,
        maxResults: 10,
      },
    });

    let video = {};
    video.snippet = item.snippet;
    video.id = item.id;
    video.statistics = item.statistics;
    video.contentDetails = item.contentDetails;
    video.channelData = channelData.items[0];
    return {
      video,
      relatedVideos: {
        list: relatedVideos.items,
        pageInfo: relatedVideos.pageInfo,
        nextPageToken: relatedVideos.nextPageToken,
      },
    };
  }
);

export const getMoreRelatedVideos = createAsyncThunk(
  'videoDetail/fetchMoreRelated',
  async ({ videoId }, { getState }) => {
    const { data } = await axiosInstance.get('/search', {
      params: {
        part: 'snippet',
        type: 'video',
        relatedToVideoId: videoId,
        maxResults: 10,
        pageToken: getState().videoDetail.relatedVideos.nextPageToken,
      },
    });
    return data;
  }
);

const initialState = {
  detail: {},
  relatedVideos: {
    pageInfo: {
      totalResults: 0,
      resultsPerPage: 0,
    },
    list: [],
    nextPageToken: '',
  },
  loading: false,
  error: null,
};

const videoDetailSlice = createSlice({
  name: 'videoDetail',
  reducers: {},
  extraReducers: {
    [fetchVideoDetail.pending]: (state) => {
      state.loading = true;
    },
    [fetchVideoDetail.fulfilled]: (
      state,
      { payload: { video, relatedVideos } }
    ) => {
      state.loading = false;
      state.detail = video;
      state.relatedVideos = relatedVideos;
      state.error = null;
    },
    [fetchVideoDetail.rejected]: (state) => {
      state.error = 'Fail to fetch';
      state.loading = false;
    },
    [getMoreRelatedVideos.fulfilled]: (state, { payload }) => {
      state.relatedVideos.list = state.relatedVideos.list.concat(payload.items);
      state.relatedVideos.nextPageToken = payload.nextPageToken;
      state.relatedVideos.pageInfo = payload.pageInfo;
    },
  },
  initialState,
});

export default videoDetailSlice.reducer;
