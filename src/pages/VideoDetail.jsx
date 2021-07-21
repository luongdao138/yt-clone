import moment from 'moment';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import DescModal from '../components/DescModal';
import VideoChannel from '../components/VideoChannel';
import VideoFeed from '../components/VideoFeed';
import VideoInfo from '../components/VideoInfo';
import VideoThumbnail from '../components/VideoThumbnail';
import { formatView } from '../helpers/formatNumber';
import { fetchVideoDetail } from '../redux/reducers/videoDetailSlice';

const VideoDetail = () => {
  const [showDesc, setShowDesc] = useState(false);
  const location = useLocation();
  const videoId = new URLSearchParams(location.search).get('v');
  const dispatch = useDispatch();
  const { detail, loading } = useSelector((state) => state.videoDetail);
  console.log(detail);
  useEffect(() => {
    dispatch(fetchVideoDetail({ videoId }));
  }, [videoId]);

  if (loading) return <Wrapper>Loading...</Wrapper>;

  return (
    <Wrapper>
      <VideoDescModal showDesc={showDesc}>
        <DescModal setShowDesc={setShowDesc} title={detail.snippet?.title} />
      </VideoDescModal>
      <Left>
        <VideoThumbnail youtubeLink={`/${detail?.id}`} />
        {!showDesc && (
          <>
            <VideoInfo
              videoTitle={detail.snippet?.title}
              view={formatView(detail.statistics?.viewCount)}
              release_date='Sep 24, 2017'
              release_date={moment(detail.snippet?.publishedAt).format('ll')}
              showDesc={showDesc}
              likeCount={formatView(detail.statistics?.likeCount)}
              dislikeCount={formatView(detail.statistics?.dislikeCount)}
              setShowDesc={setShowDesc}
            />
            <VideoChannel
              image='https://yt3.ggpht.com/ytc/AKedOLQPwQ8OrCuTjD4I4IPXph9X1kPZk4nSssROgpNzIA=s88-c-k-c0x00ffffff-no-rj'
              channelName={detail.snippet?.channelTitle}
              subscriber='7.36k'
              isSubscribe={false}
            />
          </>
        )}
      </Left>
      {!showDesc && (
        <Right>
          {/* <Grid>
            {[...new Array(10)].map((_, index) => (
              <VideoFeed
                key={index}
                image='https://i.ytimg.com/vi/IdkcGXZU6vo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBF2GkxIeBSIW-RrDqbnLWqwkVb2A'
                duration='41:32'
                chanelImage='https://yt3.ggpht.com/ytc/AKedOLTKFq-spzNWb84uFEZbJdHM-s6C_nkw3_Gmm_l9=s68-c-k-c0x00ffffff-no-rj'
                title='TỔNG GIÁM ĐỐC MỚI CỦA TÔI TẬP 1 | Địch Lệ Nhiệt Ba | Phim Bộ Trung Quốc Hay Nhất 2021'
                channelName='Uni Drama'
                view='1M'
                release_time='3 weeks ago'
                horizontal={true}
              />
            ))}
          </Grid> */}
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
