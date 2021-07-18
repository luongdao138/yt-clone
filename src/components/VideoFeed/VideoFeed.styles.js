import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div``;
export const ThumbnailWrapper = styled(Link)`
  position: relative;

  span {
    position: absolute;
    z-index: 10;
    bottom: 8px;
    right: 5px;
    display: block;
    background-color: var(--primary-color);
    color: var(--white-color);
    font-size: 12px;
    padding: 2px 5px;
    opacity: 0.9;
    border-radius: 2px;
  }
`;
export const Thumbnail = styled.img`
  width: 100%;
  max-height: 248px;
  object-fit: cover;
`;
export const InfoWrapper = styled.div`
  display: flex;

  @media (max-width: 500px) {
    padding: 0 8px;
  }
`;
export const ChannelLink = styled(Link)`
  display: block;
  padding: 8px 0;
  padding-right: 10px;

  img {
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 50%;
  }
`;
export const Title = styled.p`
  color: var(--white-color);
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 4px;
`;
export const InfoText = styled.span`
  color: var(--grey-color);
  font-size: 14px;
`;
export const Detail = styled.div`
  display: flex;
  align-items: center;
`;

export const Divider = styled.div`
  margin: 0 5px;
  width: 3.5px;
  height: 3.5px;
  border-radius: 50%;
  background-color: var(--grey-color);
`;
