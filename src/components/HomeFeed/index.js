import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VideoFeed from '../VideoFeed';
import { Content, Wrapper } from './HomeFeed.styles';
import moment from 'moment';
import { formatView } from '../../helpers/formatNumber';
import ytDurationFormat from 'youtube-duration-format';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getHomeVideos } from '../../redux/reducers/homeVideosSlice';

const HomeFeed = () => {
  const { loading, list, error, keyword, pageInfo } = useSelector(
    (state) => state.homeVideos
  );
  const dispatch = useDispatch();
  const fetchData = () => {
    dispatch(getHomeVideos({ keyword }));
  };

  // if (loading)
  //   return (
  //     <Wrapper>
  //       <Content>Loading...</Content>
  //     </Wrapper>
  //   );

  return (
    <Wrapper>
      <InfiniteScroll
        dataLength={list.length}
        next={fetchData}
        hasMore={list.length < pageInfo.totalResults}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <Content>
          {list.map((video, index) => (
            <VideoFeed
              id={typeof video.id === 'object' ? video.id.videoId : video.id}
              channelId={video.snippet.channelId}
              key={(video.id || video.videoId) + index}
              image={video.snippet.thumbnails.medium.url}
              duration={
                keyword === 'All'
                  ? ytDurationFormat(video.contentDetails?.duration)
                  : ''
              }
              chanelImage='https://yt3.ggpht.com/ytc/AKedOLTKFq-spzNWb84uFEZbJdHM-s6C_nkw3_Gmm_l9=s68-c-k-c0x00ffffff-no-rj'
              title={video.snippet.title}
              channelName={video.snippet.channelTitle}
              view={
                keyword === 'All'
                  ? formatView(video.statistics?.viewCount)
                  : ' '
              }
              release_time={moment(video.snippet.publishedAt).fromNow()}
            />
          ))}
        </Content>
      </InfiniteScroll>
    </Wrapper>
  );
};

export default HomeFeed;
