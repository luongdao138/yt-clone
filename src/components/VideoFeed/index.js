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
} from './VideoFeed.styles';

const VideoFeed = ({
  image,
  duration,
  chanelImage,
  title,
  channelName,
  release_time,
  view,
}) => {
  return (
    <Wrapper>
      <ThumbnailWrapper to='/'>
        <Thumbnail src={image} />
        <span>{duration}</span>
      </ThumbnailWrapper>
      <InfoWrapper>
        <ChannelLink>
          <img src={chanelImage} alt='' />
        </ChannelLink>
        <Link to='/' style={{ padding: '8px 0' }}>
          <Title>{title}</Title>
          <InfoText>{channelName}</InfoText>
          <Detail>
            <InfoText>{view} views</InfoText>
            <Divider />
            <InfoText>{release_time}</InfoText>
          </Detail>
        </Link>
      </InfoWrapper>
    </Wrapper>
  );
};

export default VideoFeed;
