import React from 'react';
import { Wrapper, Tag, Content } from './HomeTags.styles';

const HomeTags = () => {
  return (
    <Wrapper>
      <Content>
        {[...new Array(30)].map((_, index) => (
          <Tag key={index}>Music</Tag>
        ))}
      </Content>
    </Wrapper>
  );
};

export default HomeTags;
