import React from 'react';
import { MdClose } from 'react-icons/md';
import {
  Content,
  Wrapper,
  CloseWrapper,
  Stats,
  StatsItem,
  Title,
  Description,
} from './DescModal.styles';

const DescModal = ({
  setShowDesc,
  title,
  likeCount,
  viewCount,
  time,
  desc,
}) => {
  return (
    <Wrapper>
      <CloseWrapper>
        <h4>Video Description</h4>
        <MdClose onClick={() => setShowDesc(false)} />
      </CloseWrapper>
      <Content>
        <Title>{title}</Title>
        <Stats>
          <StatsItem>
            <p>{likeCount}</p>
            <span>Likes</span>
          </StatsItem>
          <StatsItem>
            <p>{viewCount}</p>
            <span>Views</span>
          </StatsItem>
          <StatsItem>
            <p>{new Date(time).getFullYear()}</p>
            <span>
              {new Date(time).getDate()} thg {new Date(time).getMonth()}
            </span>
          </StatsItem>
        </Stats>
        <Description
          dangerouslySetInnerHTML={{
            __html: desc,
          }}
        />
      </Content>
    </Wrapper>
  );
};

export default DescModal;
