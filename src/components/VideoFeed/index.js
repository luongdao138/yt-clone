import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axiosInstance from '../../helpers/axios';
import {
  Wrapper,
  ThumbnailWrapper,
  InfoWrapper,
  ChannelLink,
  Title,
  InfoText,
  Thumbnail,
  Detail,
  Divider,
  SideText,
} from './VideoFeed.styles';
import { formatView } from '../../helpers/formatNumber';
import ytDurationFormat from 'youtube-duration-format';
import useVideoInfo from '../../hooks/useVideoInfo';

const VideoFeed = ({
  id,
  channelId,
  image,
  duration,
  title,
  channelName,
  release_time,
  view,
  horizontal,
}) => {
  const { keyword } = useSelector((state) => state.homeVideos);
  // const [durationTime, setDurationTime] = useState('');
  // const [viewCount, setViewCount] = useState('');
  // const [channelImage, setChannelImage] = useState('');
  const { durationTime, viewCount, channelImage } = useVideoInfo(
    id,
    keyword,
    channelId
  );

  // useEffect(() => {
  //   if (keyword !== 'All') {
  //     const getVideoInfo = async () => {
  //       try {
  //         const { data } = await axiosInstance.get('/videos', {
  //           params: {
  //             part: 'contentDetails,statistics',
  //             id,
  //           },
  //         });
  //         const [video] = data.items;
  //         setDurationTime(ytDurationFormat(video.contentDetails.duration));
  //         setViewCount(formatView(video.statistics.viewCount));
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     getVideoInfo();
  //   }
  // }, [id]);

  return (
    <Wrapper horizontal={horizontal}>
      <ThumbnailWrapper to={`/watch?v=${id}`} horizontal={horizontal}>
        <Thumbnail src={image} />
        <span>{keyword === 'All' ? duration : durationTime}</span>
      </ThumbnailWrapper>
      <InfoWrapper horizontal={horizontal}>
        <ChannelLink horizontal={horizontal} to='/'>
          <img src={channelImage} alt='' />
        </ChannelLink>
        <Link to={`/watch?v=${id}`} style={{ padding: '8px 0' }}>
          <Title horizontal={horizontal}>{title}</Title>
          <SideText>
            <InfoText>{channelName}</InfoText>
            <Divider disappear />
            <Detail>
              <InfoText horizontal={horizontal}>
                {keyword === 'All' ? view : viewCount} views
              </InfoText>
              <Divider />
              <InfoText horizontal={horizontal}>{release_time}</InfoText>
            </Detail>
          </SideText>
        </Link>
      </InfoWrapper>
    </Wrapper>
  );
};

export default VideoFeed;
