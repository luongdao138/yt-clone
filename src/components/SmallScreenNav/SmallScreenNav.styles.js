import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 56px;
  background-color: var(--primary-color);
  width: 100vw;
  z-index: 100;
  border-top: 1px solid #373737;

  @media (min-width: 501px) {
    display: none;
  }
`;

export const Content = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 12px;
  color: var(--white-color);
`;

export const Icon = styled.li``;

export const IconLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    font-size: ${({ big }) => (big ? '28px' : '20px')};
    color: var(--white-color);
    margin-bottom: 5px;
  }

  span {
    font-size: 10px;
    color: var(--white-color);
  }
`;
