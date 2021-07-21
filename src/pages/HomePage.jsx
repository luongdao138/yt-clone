import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HomeFeed from '../components/HomeFeed';
import HomeTags from '../components/HomeTags';
import { getHomeVideos } from '../redux/reducers/homeVideosSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomeVideos({ keyword: 'All' }));
  }, []);

  return (
    <div>
      <HomeTags />
      <HomeFeed />
    </div>
  );
};

export default HomePage;
