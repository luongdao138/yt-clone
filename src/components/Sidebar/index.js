import React from 'react';
import {
  Wrapper,
  SidebarList,
  SidebarLink,
  SidebarItem,
} from './Sidebar.styles';
import {
  MdHome,
  MdExplore,
  MdSubscriptions,
  MdVideoLibrary,
} from 'react-icons/md';
import SidebarModal from '../SidebarModal';

const Sidebar = ({ isShowSideBar, onClose, disappear }) => {
  return (
    <Wrapper>
      {!disappear ? (
        <>
          <SidebarModal />
          <SidebarList>
            <SidebarItem>
              <SidebarLink to='/'>
                <MdHome />
                <span>Home</span>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink to='/'>
                <MdExplore />
                <span>Explore</span>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink to='/'>
                <MdSubscriptions />
                <span>Subscriptions</span>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink to='/'>
                <MdVideoLibrary />
                <span>Library</span>
              </SidebarLink>
            </SidebarItem>
          </SidebarList>
        </>
      ) : (
        <SidebarModal />
      )}
    </Wrapper>
  );
};

export default Sidebar;
