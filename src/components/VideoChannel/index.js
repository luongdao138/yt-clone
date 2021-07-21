import React from 'react';
import {
  Wrapper,
  Content,
  Left,
  ChannelLink,
  ChannelName,
  Detail,
  Subscriber,
  Button,
  Description,
  Show,
} from './VideoChannel.styles';
import ShowMoreText from 'react-show-more-text';

const VideoChannel = ({
  image,
  channelName,
  subscriber,
  isSubscribe,
  desc,
}) => {
  return (
    <Wrapper>
      <Content>
        <Left>
          <ChannelLink to='/'>
            <img src={image} alt='' />
          </ChannelLink>
          <Detail>
            <ChannelName to='/'>{channelName}</ChannelName>
            <Subscriber>{subscriber} subscribers</Subscriber>
          </Detail>
        </Left>
        <Button>Subscribe</Button>
      </Content>
      <Description>
        <ShowMoreText
          lines={3}
          more={<Show>Show more</Show>}
          less={<Show>Show less</Show>}
          expanded={false}
        >
          {desc}
        </ShowMoreText>
      </Description>
    </Wrapper>
  );
};

export default VideoChannel;
