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
    let video = {};
    video.snippet = item.snippet;
    video.id = item.id;
    video.statistics = item.statistics;
    video.contentDetails = item.contentDetails;
    return video;
  }
);

const initialState = {
  detail: {},
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
    [fetchVideoDetail.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.detail = payload;
      state.error = null;
    },
    [fetchVideoDetail.rejected]: (state) => {
      state.error = 'Fail to fetch';
      state.loading = false;
    },
  },
  initialState,
});

export default videoDetailSlice.reducer;
