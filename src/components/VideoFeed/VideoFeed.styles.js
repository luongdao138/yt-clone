import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;
export const ThumbnailWrapper = styled(Link)`
  position: relative;
  width: ${({ horizontal }) => (horizontal ? '50%' : '100%')};
  margin-right: ${({ horizontal }) => (horizontal ? '8px' : '0')};

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

  @media (max-width: 450px) {
    width: 100%;
    margin-right: 0;
  }
`;
export const Thumbnail = styled.img`
  width: 100%;
  max-height: 248px;
  object-fit: cover;
`;
export const InfoWrapper = styled.div`
  display: flex;
  width: ${({ horizontal }) => (horizontal ? '50%' : '100%')};
  @media (max-width: 500px) {
    padding: 0 8px;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;
export const ChannelLink = styled(Link)`
  display: ${({ horizontal }) => (horizontal ? 'none' : 'block')};
  padding: 8px 0;
  padding-right: 10px;

  img {
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 50%;
  }

  @media (max-width: 450px) {
    display: block;
  }
`;
export const Title = styled.p`
  color: var(--white-color);
  font-weight: 500;
  font-size: ${({ horizontal }) => (horizontal ? '13px' : '14px')};
  line-height: 20px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 4px;
`;

export const SideText = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 450px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const InfoText = styled.span`
  color: var(--grey-color);
  font-size: ${({ horizontal }) => (horizontal ? '13px' : '14px')};

  @media (max-width: 450px) {
    font-size: 10px;
  }
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

  @media (min-width: 450px) {
    display: ${({ disappear }) => (disappear ? 'none' : 'block')};
  }
`;
