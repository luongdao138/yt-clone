import React from 'react';
import {
  Wrapper,
  Content,
  Menu,
  Logo,
  LogoIcon,
  LogoText,
  Section,
  SectionCenter,
  SearchWrapper,
  SearchInput,
  SearchButton,
  SearchIcon,
  Micro,
  Icon,
  Avatar,
} from './Navbar.styles';
import { MdNotifications, MdApps, MdSearch } from 'react-icons/md';
import { BsCameraVideoFill } from 'react-icons/bs';
import YTLogo from '../../assets/youtube-logo-2431.svg';
import { useLayoutContext } from '../../pages/Layout';

const Navbar = () => {
  const { openSidebar } = useLayoutContext();
  return (
    <Wrapper>
      <Content>
        <Section>
          {/* left */}
          {/* menu, logo */}
          <Menu onClick={openSidebar} />
          <Logo href='/'>
            <LogoIcon src={YTLogo} />
            <LogoText>Youtube</LogoText>
          </Logo>
        </Section>
        <SectionCenter>
          {/* center */}
          {/* Search bar */}
          <SearchWrapper>
            <SearchInput />
            <SearchButton>
              <SearchIcon />
            </SearchButton>
          </SearchWrapper>
          <Micro />
        </SectionCenter>
        <Section>
          {/* right */}
          <Icon resp>
            <BsCameraVideoFill />
          </Icon>
          <Icon>
            <MdApps />
          </Icon>
          <Icon>
            <MdNotifications />
          </Icon>
          <Icon disappear>
            <MdSearch />
          </Icon>
          <Avatar src='https://images.unsplash.com/photo-1626427832435-d6c500cc2686?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
        </Section>
      </Content>
    </Wrapper>
  );
};

export default Navbar;
