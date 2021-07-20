import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid #9090903b;

  @media (max-width: 500px) {
    padding: 10px 0px;
  }
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    padding: 0 8px;
  }
`;
export const Left = styled.div`
  display: flex;
  align-items: center;
`;
export const ChannelLink = styled(Link)`
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 12px;
    @media (max-width: 499px) {
      width: 36px;
      height: 36px;
    }
  }
`;
export const Detail = styled.div``;
export const ChannelName = styled(Link)`
  color: var(--white-color);
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
`;
export const Subscriber = styled.p`
  color: var(--grey-color);
  font-size: 12px;
`;
export const Button = styled.button`
  padding: 10px 18px;
  background-color: var(--red-color);
  border-radius: 2px;
  color: var(--white-color);
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  @media (max-width: 499px) {
    background-color: transparent;
    padding: 0;
    /* color: var(--red-color); */
    color: #dc2121;
    font-weight: 600;
  }
`;

export const Description = styled.div`
  color: var(--white-color);
  font-size: 14px;
  margin-left: 62px;
  margin-top: 10px;
  line-height: 22px;

  @media (max-width: 450px) {
    display: none;
  }
`;
export const Show = styled.p`
  text-transform: uppercase;
  font-size: 14px;
  color: var(--grey-color);
  font-weight: 500;
  margin-top: 10px;
`;
