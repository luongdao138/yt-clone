import React from 'react';
import { Link } from 'react-router-dom';
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

const VideoFeed = ({
  image,
  duration,
  chanelImage,
  title,
  channelName,
  release_time,
  view,
  horizontal,
}) => {
  return (
    <Wrapper horizontal={horizontal}>
      <ThumbnailWrapper to='/watch' horizontal={horizontal}>
        <Thumbnail src={image} />
        <span>{duration}</span>
      </ThumbnailWrapper>
      <InfoWrapper horizontal={horizontal}>
        <ChannelLink horizontal={horizontal} to='/'>
          <img src={chanelImage} alt='' />
        </ChannelLink>
        <Link to='/watch' style={{ padding: '8px 0' }}>
          <Title horizontal={horizontal}>{title}</Title>
          <SideText>
            <InfoText>{channelName}</InfoText>
            <Divider disappear />
            <Detail>
              <InfoText horizontal={horizontal}>{view} views</InfoText>
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
