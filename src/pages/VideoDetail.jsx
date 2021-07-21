import moment from 'moment';
import React, { useEffect } from 'react';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import DescModal from '../components/DescModal';
import VideoChannel from '../components/VideoChannel';
import VideoFeed from '../components/VideoFeed';
import VideoInfo from '../components/VideoInfo';
import VideoThumbnail from '../components/VideoThumbnail';
import { formatView } from '../helpers/formatNumber';
import {
  fetchVideoDetail,
  getMoreRelatedVideos,
} from '../redux/reducers/videoDetailSlice';

const VideoDetail = () => {
  const [showDesc, setShowDesc] = useState(false);
  const location = useLocation();
  const videoId = new URLSearchParams(location.search).get('v');
  const dispatch = useDispatch();
  const { detail, loading, relatedVideos } = useSelector(
    (state) => state.videoDetail
  );

  const fetchMoreRelatedVideos = () => {
    dispatch(getMoreRelatedVideos({ videoId }));
  };

  useEffect(() => {
    dispatch(fetchVideoDetail({ videoId }));
  }, [videoId]);

  if (loading) return <Wrapper>Loading...</Wrapper>;

  return (
    <Wrapper>
      <VideoDescModal showDesc={showDesc}>
        <DescModal
          setShowDesc={setShowDesc}
          title={detail.snippet?.title}
          likeCount={formatView(detail.statistics?.likeCount)}
          viewCount={detail.statistics?.viewCount}
          desc={detail.snippet?.description}
          time={detail.snippet?.publishedAt}
        />
      </VideoDescModal>
      <Left>
        <VideoThumbnail youtubeLink={`/${detail?.id}`} />
        {!showDesc && (
          <>
            <VideoInfo
              videoTitle={detail.snippet?.title}
              view={formatView(detail.statistics?.viewCount)}
              release_date={moment(detail.snippet?.publishedAt).format('ll')}
              showDesc={showDesc}
              likeCount={formatView(detail.statistics?.likeCount)}
              dislikeCount={formatView(detail.statistics?.dislikeCount)}
              setShowDesc={setShowDesc}
            />
            <VideoChannel
              image={detail.channelData?.snippet?.thumbnails.medium.url}
              channelName={detail.snippet?.channelTitle}
              subscriber={formatView(
                detail.channelData?.statistics?.subscriberCount
              )}
              isSubscribe={false}
              desc={detail.snippet?.description}
            />
          </>
        )}
      </Left>
      {!showDesc && (
        <Right>
          <InfiniteScroll
            dataLength={relatedVideos.list.length}
            hasMore={
              relatedVideos.list.length < relatedVideos.pageInfo.totalResults
            }
            next={fetchMoreRelatedVideos}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            <Grid>
              {relatedVideos.list
                .filter((x) => x.snippet)
                .map((relatedVideo, index) => (
                  <VideoFeed
                    id={relatedVideo.id.videoId}
                    channelId={relatedVideo.snippet?.channelId}
                    key={relatedVideo.id.videoId + index}
                    image={relatedVideo.snippet?.thumbnails.medium.url}
                    title={relatedVideo.snippet?.title}
                    channelName={relatedVideo.snippet?.channelTitle}
                    release_time={moment(
                      relatedVideo.snippet?.publishedAt
                    ).fromNow()}
                    horizontal
                    isRelatedVideo
                  />
                ))}
            </Grid>
          </InfiniteScroll>
        </Right>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: calc(100vh - 56px);
  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 0 20px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    padding: 0px;
  }
`;

const Left = styled.div`
  flex: 1.5;
  padding-right: 24px;
  padding-top: 24px;
  margin-left: 24px;
  @media (max-width: 1000px) {
    margin-left: 0;
    padding-right: 0;
  }
  @media (max-width: 500px) {
    padding-top: 0;
  }
`;

const Right = styled.div`
  flex: 1;
  padding-right: 24px;
  padding-top: 24px;
  @media (max-width: 500px) {
    padding-right: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  row-gap: 8px;
`;

const VideoDescModal = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.2s;
  background-color: var(--primary-color);
  /* background-color: red; */
  z-index: 50;
  height: ${({ showDesc }) => (showDesc ? 'calc(100vh - 190px)' : '0')};
  overflow-y: auto;
`;

export default VideoDetail;
