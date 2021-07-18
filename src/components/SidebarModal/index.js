import React from 'react';
import { useRef } from 'react';
import { createPortal } from 'react-dom';
import useEventListener from '../../hooks/useEventListener';
import { useLayoutContext } from '../../pages/Layout';
import {
  Content,
  List,
  ListItem,
  ListItemLink,
  Wrapper,
  Divider,
  Menu,
  Logo,
  LogoIcon,
  LogoText,
  Header,
  Main,
  Avatar,
  Title,
} from './SidebarModal.styles';
import YTLogo from '../../assets/youtube-logo-2431.svg';
import {
  MdHome,
  MdExplore,
  MdSubscriptions,
  MdVideoLibrary,
  MdHistory,
  MdWatchLater,
  MdThumbUp,
  MdSettings,
  MdFlag,
  MdHelp,
  MdFeedback,
} from 'react-icons/md';
import { RiVideoLine } from 'react-icons/ri';
import { SiYoutubegaming } from 'react-icons/si';
import { IoMdTrophy } from 'react-icons/io';
import LiveIcon from '../../assets/icons8-youtube-live.svg';

const SidebarModal = () => {
  const { isSidebarOpen, closeSidebar } = useLayoutContext();
  const contentRef = useRef();

  useEventListener('mousedown', window, (e) => {
    if (!contentRef.current.contains(e.target)) {
      closeSidebar();
    }
  });

  return createPortal(
    <Wrapper open={isSidebarOpen}>
      <Content ref={contentRef} open={isSidebarOpen}>
        <Header>
          <Menu onClick={closeSidebar} />
          <Logo href='/'>
            <LogoIcon src={YTLogo} />
            <LogoText>Youtube</LogoText>
          </Logo>
        </Header>
        <Main>
          <List>
            <ListItem>
              <ListItemLink>
                <MdHome />
                <span>Home</span>
              </ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink>
                <MdExplore />
                <span>Explore</span>
              </ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink>
                <MdSubscriptions />
                <span>Subscriptions</span>
              </ListItemLink>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItemLink>
              <MdVideoLibrary />
              <span>Library</span>
            </ListItemLink>
            <ListItemLink>
              <MdHistory />
              <span>History</span>
            </ListItemLink>
            <ListItemLink>
              <RiVideoLine />
              <span>Your videos</span>
            </ListItemLink>
            <ListItemLink>
              <MdWatchLater />
              <span>Watch later</span>
            </ListItemLink>
            <ListItemLink>
              <MdThumbUp />
              <span>Like videos</span>
            </ListItemLink>
          </List>
          <Divider />
          <Title>Subscriptions</Title>
          <List>
            <ListItemLink>
              <Avatar src='https://yt3.ggpht.com/u2JIKWX6MSq5dZEObJEBK6SUYQOP8AlMl9nVorylmIv2Oa9YPrR7Dd-ty9O8nLHQ6FIOsP4aKA=s88-c-k-c0x00ffffff-no-rj' />
              <span>BLV Anh Quân</span>
            </ListItemLink>
            <ListItemLink>
              <Avatar src='https://yt3.ggpht.com/u2JIKWX6MSq5dZEObJEBK6SUYQOP8AlMl9nVorylmIv2Oa9YPrR7Dd-ty9O8nLHQ6FIOsP4aKA=s88-c-k-c0x00ffffff-no-rj' />
              <span>BLV Anh Quân</span>
            </ListItemLink>
            <ListItemLink>
              <Avatar src='https://yt3.ggpht.com/u2JIKWX6MSq5dZEObJEBK6SUYQOP8AlMl9nVorylmIv2Oa9YPrR7Dd-ty9O8nLHQ6FIOsP4aKA=s88-c-k-c0x00ffffff-no-rj' />
              <span>BLV Anh Quân</span>
            </ListItemLink>
            <ListItemLink>
              <Avatar src='https://yt3.ggpht.com/u2JIKWX6MSq5dZEObJEBK6SUYQOP8AlMl9nVorylmIv2Oa9YPrR7Dd-ty9O8nLHQ6FIOsP4aKA=s88-c-k-c0x00ffffff-no-rj' />
              <span>BLV Anh Quân</span>
            </ListItemLink>
            <ListItemLink>
              <Avatar src='https://yt3.ggpht.com/u2JIKWX6MSq5dZEObJEBK6SUYQOP8AlMl9nVorylmIv2Oa9YPrR7Dd-ty9O8nLHQ6FIOsP4aKA=s88-c-k-c0x00ffffff-no-rj' />
              <span>BLV Anh Quân</span>
            </ListItemLink>
            <ListItemLink>
              <Avatar src='https://yt3.ggpht.com/u2JIKWX6MSq5dZEObJEBK6SUYQOP8AlMl9nVorylmIv2Oa9YPrR7Dd-ty9O8nLHQ6FIOsP4aKA=s88-c-k-c0x00ffffff-no-rj' />
              <span>BLV Anh Quân</span>
            </ListItemLink>
            <ListItemLink>
              <Avatar src='https://yt3.ggpht.com/u2JIKWX6MSq5dZEObJEBK6SUYQOP8AlMl9nVorylmIv2Oa9YPrR7Dd-ty9O8nLHQ6FIOsP4aKA=s88-c-k-c0x00ffffff-no-rj' />
              <span>BLV Anh Quân</span>
            </ListItemLink>
          </List>
          <Divider />
          <Title>More from youtube</Title>
          <List>
            <ListItemLink>
              <SiYoutubegaming />
              <span>Gaming</span>
            </ListItemLink>
            <ListItemLink>
              <img src={LiveIcon} alt='' />
              <span>Live</span>
            </ListItemLink>
            <ListItemLink>
              <IoMdTrophy />
              <span>Sports</span>
            </ListItemLink>
          </List>
          <Divider />
          <List>
            <ListItemLink>
              <MdSettings />
              <span>Settings</span>
            </ListItemLink>
            <ListItemLink>
              <MdFlag />
              <span>Report history</span>
            </ListItemLink>
            <ListItemLink>
              <MdHelp />
              <span>Help</span>
            </ListItemLink>
            <ListItemLink>
              <MdFeedback />
              <span>Send feedback</span>
            </ListItemLink>
          </List>
        </Main>
      </Content>
    </Wrapper>,
    document.getElementById('sidebar-portal')
  );
};

export default SidebarModal;
