import React from 'react';
import styled from 'styled-components';
import VideoFeed from '../components/VideoFeed';
import VideoInfo from '../components/VideoInfo';
import VideoThumbnail from '../components/VideoThumbnail';

const VideoDetail = () => {
  return (
    <Wrapper>
      <Left>
        <VideoThumbnail youtubeLink='/TsUjSkzQ9ko' />
        <VideoInfo
          videoTitle='TỔNG GIÁM ĐỐC MỚI CỦA TÔI TẬP 1 | Địch Lệ Nhiệt Ba | Phim Bộ Trung Quốc Hay Nhất 2021'
          view='2.4M'
          release_date='Sep 24, 2017'
        />
      </Left>
      <Right>
        <Grid>
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
        </Grid>
      </Right>
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

export default VideoDetail;
