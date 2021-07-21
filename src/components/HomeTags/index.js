import React from 'react';
import { useDispatch } from 'react-redux';
import { getHomeVideos } from '../../redux/reducers/homeVideosSlice';
import { Wrapper, Tag, Content } from './HomeTags.styles';

const tags = [
  'All',
  'React js',
  'Redux',
  'One piece',
  'BLV Anh Quân',
  'Vô Quy',
  'Một triệu khả năng',
];

const HomeTags = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Content>
        {tags.map((tag, index) => (
          <Tag
            onClick={() => {
              dispatch(getHomeVideos({ keyword: tag }));
            }}
            key={index}
          >
            {tag}
          </Tag>
        ))}
      </Content>
    </Wrapper>
  );
};

export default HomeTags;
