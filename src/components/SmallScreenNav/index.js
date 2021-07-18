import React from 'react';
import { Wrapper, Content, Icon, IconLink } from './SmallScreenNav.styles';
import {
  MdAddCircleOutline,
  MdHome,
  MdSubscriptions,
  MdVideoLibrary,
} from 'react-icons/md';
import { BiSlideshow } from 'react-icons/bi';

const SmallScreenNav = () => {
  return (
    <Wrapper>
      <Content>
        <Icon>
          <IconLink to='/'>
            <MdHome />
            <span>Home</span>
          </IconLink>
        </Icon>
        <Icon>
          <IconLink to='/'>
            <BiSlideshow />
            <span>Shorts</span>
          </IconLink>
        </Icon>
        <Icon>
          <IconLink to='/' big='true'>
            <MdAddCircleOutline />
          </IconLink>
        </Icon>
        <Icon>
          <IconLink to='/'>
            <MdSubscriptions />
            <span>Subscriptions</span>
          </IconLink>
        </Icon>
        <Icon>
          <IconLink to='/'>
            <MdVideoLibrary />
            <span>Library</span>
          </IconLink>
        </Icon>
      </Content>
    </Wrapper>
  );
};

export default SmallScreenNav;
