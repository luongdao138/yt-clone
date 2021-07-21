import React from 'react';
import {
  Wrapper,
  Title,
  InfoText,
  Divider,
  Info,
  IconWrapper,
  Icon,
  SmallScreenIconWrapper,
  SmallIcon,
  Content,
  HideDesc,
  IconShowDesc,
  VideoDescModal,
} from './VideoInfo.styles';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';
import { IoMdShareAlt } from 'react-icons/io';
import { CgPlayListAdd } from 'react-icons/cg';
import {
  RiThumbDownLine,
  RiThumbUpLine,
  RiShareForwardLine,
} from 'react-icons/ri';
import { AiOutlineDownload } from 'react-icons/ai';
import { BiAddToQueue } from 'react-icons/bi';
import { BsChevronDown } from 'react-icons/bs';

const VideoInfo = ({
  videoTitle,
  view,
  release_date,
  setShowDesc,
  likeCount,
  dislikeCount,
}) => {
  return (
    <>
      {/* {showDesc && <VideoDescModal></VideoDescModal>} */}
      <Wrapper>
        <HideDesc onClick={() => setShowDesc(true)}>
          <IconShowDesc>
            <BsChevronDown />
          </IconShowDesc>
        </HideDesc>
        <Title>{videoTitle}</Title>
        <Info>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <InfoText>{view} views</InfoText>
            <Divider />
            <InfoText disappear>{release_date}</InfoText>
          </div>
          <IconWrapper>
            <Icon fontsize='24px' border>
              <MdThumbUp />
              <span>{likeCount}</span>
            </Icon>
            <Icon fontsize='24px' border>
              <MdThumbDown />
              <span>{dislikeCount}</span>
            </Icon>
            <Icon fontsize='28px'>
              <IoMdShareAlt />
              <span>Share</span>
            </Icon>
            <Icon fontsize='28px'>
              <CgPlayListAdd />
              <span>Save</span>
            </Icon>
          </IconWrapper>
        </Info>
        <SmallScreenIconWrapper>
          <Content>
            <SmallIcon>
              <RiThumbUpLine />
              <span>25</span>
            </SmallIcon>
            <SmallIcon>
              <RiThumbDownLine />
              <span>25</span>
            </SmallIcon>
            <SmallIcon>
              <RiShareForwardLine />
              <span>Share</span>
            </SmallIcon>
            <SmallIcon>
              <AiOutlineDownload />
              <span>Download</span>
            </SmallIcon>
            <SmallIcon>
              <BiAddToQueue />
              <span>Save</span>
            </SmallIcon>
          </Content>
        </SmallScreenIconWrapper>
      </Wrapper>
    </>
  );
};

export default VideoInfo;
