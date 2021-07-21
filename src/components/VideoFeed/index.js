import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axiosInstance from '../../helpers/axios';
import {
  Wrapper,
  ThumbnailWrapper,
  InfoWrapper,
  ChannelLink,
  Title,
  InfoText,
  Thumbnail,
  Detail,
  Divider,
  SideText,
} from './VideoFeed.styles';
import { formatView } from '../../helpers/formatNumber';
import ytDurationFormat from 'youtube-duration-format';
import useVideoInfo from '../../hooks/useVideoInfo';

const VideoFeed = ({
  id,
  channelId,
  image,
  duration,
  title,
  channelName,
  release_time,
  view,
  horizontal,
  isRelatedVideo,
}) => {
  const { keyword } = useSelector((state) => state.homeVideos);
  const { durationTime, viewCount, channelImage } = useVideoInfo(
    id,
    !isRelatedVideo ? keyword : '',
    channelId,
    isRelatedVideo
  );

  return (
    <Wrapper horizontal={horizontal}>
      <ThumbnailWrapper to={`/watch?v=${id}`} horizontal={horizontal}>
        <Thumbnail src={image} />
        <span>
          {keyword === 'All' && !isRelatedVideo ? duration : durationTime}
        </span>
      </ThumbnailWrapper>
      <InfoWrapper horizontal={horizontal}>
        <ChannelLink horizontal={horizontal} to='/'>
          <img src={channelImage} alt='' />
        </ChannelLink>
        <Link to={`/watch?v=${id}`} style={{ padding: '8px 0' }}>
          <Title horizontal={horizontal}>{title}</Title>
          <SideText>
            <InfoText>{channelName}</InfoText>
            <Divider disappear />
            <Detail>
              <InfoText horizontal={horizontal}>
                {keyword === 'All' && !isRelatedVideo ? view : viewCount} views
              </InfoText>
              <Divider />
              <InfoText horizontal={horizontal}>{release_time}</InfoText>
            </Detail>
          </SideText>
        </Link>
      </InfoWrapper>
    </Wrapper>
  );
};

export default VideoFeed;
