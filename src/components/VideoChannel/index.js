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

const VideoChannel = ({ image, channelName, subscriber, isSubscribe }) => {
  return (
    <Wrapper>
      <Content>
        <Left>
          <ChannelLink to='/'>
            <img src={image} alt='channel image' />
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eaque
          modi distinctio sit, recusandae dicta iste itaque! Perspiciatis
          eveniet libero eligendi quia minima, vel laboriosam! Ipsum, ratione
          excepturi temporibus eum modi labore quisquam natus? Porro accusantium
          deserunt quibusdam, placeat amet eveniet? Reiciendis consectetur
          ducimus omnis architecto? Aliquam consequatur excepturi earum alias
          autem saepe, corporis, debitis, a doloremque accusamus quia dolores
          laudantium aut dolor molestiae provident repellat id perspiciatis
          voluptatem! Reiciendis ducimus explicabo voluptates corporis mollitia,
          recusandae consectetur vero nihil porro delectus, necessitatibus quo
          voluptatum dicta, cupiditate illum expedita. Error earum pariatur
          ipsum assumenda quisquam distinctio perspiciatis ullam doloribus
          asperiores amet.
        </ShowMoreText>
      </Description>
    </Wrapper>
  );
};

export default VideoChannel;
