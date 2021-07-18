import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: fixed;
  background-color: var(--secondary-color);
  top: 56px;
  height: calc(100vh - 56px);
`;

export const SidebarList = styled.ul``;

export const SidebarItem = styled.li``;

export const SidebarLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 72px;
  padding: 16px 0;
  color: var(--grey-color);
  :hover {
    background-color: #373737;
  }

  svg {
    font-size: 24px;
    margin-bottom: 8px;
  }

  span {
    font-size: 10px;
  }
`;
