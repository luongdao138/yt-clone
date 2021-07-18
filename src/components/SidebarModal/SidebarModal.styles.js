import styled from 'styled-components';
import { MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
  transition: all 0.2s;
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? 1 : 0)};
`;

export const Content = styled.div`
  width: 240px;
  background-color: rgb(33, 33, 33);
  height: 100vh;
  transition: all 0.3s;
  transform-origin: 0 0;
  transform: ${({ open }) => (open ? 'scaleX(1)' : 'scaleX(0)')};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 24px;
  border-bottom: 1px solid #313131;
`;

export const Menu = styled(MdMenu)`
  color: var(--white-color);
  font-size: 24px;
  margin-right: 15px;
  cursor: pointer;
`;

export const Logo = styled.a`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 20px;
`;

export const LogoIcon = styled.img`
  width: 28px;
`;

export const LogoText = styled.h1`
  color: var(--white-color);
  font-size: 20px;
  margin-left: 5px;
  font-weight: 600;
`;

export const Main = styled.div`
  height: calc(100vh - 56px);
  overflow-y: auto;
`;

export const List = styled.ul`
  padding: 8px 0;
`;

export const ListItem = styled.li``;

export const ListItemLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 24px;
  color: var(--white-color);
  min-height: 40px;
  :hover {
    background-color: #373737;
  }

  svg,
  img {
    font-size: 24px;
    margin-right: 22px;
    color: var(--grey-color);
  }

  span {
    font-size: 14px;
    font-weight: 500;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #313131;
`;

export const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 22px;
`;

export const Title = styled.h2`
  padding: 0 24px;
  color: var(--grey-color);
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  margin-top: 16px;
`;
