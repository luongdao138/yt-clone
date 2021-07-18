import React from 'react';
import VideoFeed from '../VideoFeed';
import { Content, Wrapper } from './HomeFeed.styles';

const HomeFeed = () => {
  return (
    <Wrapper>
      <Content>
        {[...new Array(20)].map((_, index) => (
          <VideoFeed
            key={index}
            image='https://i.ytimg.com/vi/IdkcGXZU6vo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBF2GkxIeBSIW-RrDqbnLWqwkVb2A'
            duration='41:32'
            chanelImage='https://yt3.ggpht.com/ytc/AKedOLTKFq-spzNWb84uFEZbJdHM-s6C_nkw3_Gmm_l9=s68-c-k-c0x00ffffff-no-rj'
            title='TỔNG GIÁM ĐỐC MỚI CỦA TÔI TẬP 1 | Địch Lệ Nhiệt Ba | Phim Bộ Trung Quốc Hay Nhất 2021'
            channelName='Uni Drama'
            view='1M'
            release_time='3 weeks ago'
          />
        ))}
      </Content>
    </Wrapper>
  );
};

export default HomeFeed;
