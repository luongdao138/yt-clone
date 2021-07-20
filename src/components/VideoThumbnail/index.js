import React from 'react';
import { Wrapper } from './VideoThumbnail.styles';

const VideoThumbnail = ({ youtubeLink }) => {
  return (
    <Wrapper>
      <iframe
        width='100%'
        src={`https://www.youtube.com/embed${youtubeLink}`}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </Wrapper>
  );
};

export default VideoThumbnail;
