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

const DescModal = ({ setShowDesc, title, likeCount, view, time }) => {
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
            <p>14</p>
            <span>Likes</span>
          </StatsItem>
          <StatsItem>
            <p>126</p>
            <span>Views</span>
          </StatsItem>
          <StatsItem>
            <p>20 thg 7</p>
            <span>2021</span>
          </StatsItem>
        </Stats>
        <Description
          dangerouslySetInnerHTML={{
            __html: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eaque
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
          asperiores amet.`,
          }}
        />
      </Content>
    </Wrapper>
  );
};

export default DescModal;
