import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../helpers/axios';

export const getHomeVideos = createAsyncThunk(
  'homeVideos/popular',
  async (payload, thunkAPI) => {
    const pageToken =
      thunkAPI.getState().homeVideos.keyword === payload.keyword
        ? thunkAPI.getState().homeVideos.nextPageToken
        : '';
    if (payload.keyword !== 'All') {
      const res = await axiosInstance.get('/search', {
        params: {
          part: 'snippet',
          maxResults: 20,
          type: 'video',
          q: payload.keyword,
          pageToken,
        },
      });
      return {
        data: res.data,
        keyword: payload.keyword,
      };
    }
    const res = await axiosInstance.get('/videos', {
      params: {
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        regionCode: 'VN',
        maxResults: 20,
        pageToken,
      },
    });
    return {
      data: res.data,
      keyword: 'All',
    };
  }
);

export const getHomeVideosByKeyword = createAsyncThunk(
  'homeVideos/keyword',
  async (payload, thunkAPI) => {
    return axiosInstance.get('/search', {
      params: {
        part: 'snippet',
        maxResults: 20,
        type: 'video',
        q: payload,
      },
    });
  }
);

const initialState = {
  list: [],
  pageInfo: {
    totalResults: 0,
    resultsPerPage: 0,
  },
  nextPageToken: '',
  loading: false,
  error: null,
  keyword: 'All',
};

const homeVideosSlice = createSlice({
  name: 'homeVideos',
  reducers: {},
  initialState,
  extraReducers: {
    [getHomeVideos.pending]: (state, action) => {
      state.loading = true;
    },
    [getHomeVideos.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      if (state.keyword === payload.keyword)
        state.list = [...state.list, ...payload.data.items];
      else state.list = payload.data.items;

      state.nextPageToken = payload.data.nextPageToken;
      state.pageInfo = payload.data.pageInfo;
      state.keyword = payload.keyword;
    },
    [getHomeVideos.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = 'Fail to fetch';
      state.list = [];
    },
  },
});

export default homeVideosSlice.reducer;
