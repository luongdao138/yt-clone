import { useEffect, useState } from 'react';
import { formatView } from '../helpers/formatNumber';
import ytDurationFormat from 'youtube-duration-format';
import axiosInstance from '../helpers/axios';

const useVideoInfo = (videoId, keyword, channelId, isRelatedVideo) => {
  const [durationTime, setDurationTime] = useState('');
  const [viewCount, setViewCount] = useState('');
  const [channelImage, setChannelImage] = useState('');

  useEffect(() => {
    if (keyword !== 'All' || isRelatedVideo) {
      const getVideoInfo = async () => {
        try {
          const { data } = await axiosInstance.get('/videos', {
            params: {
              part: 'contentDetails,statistics',
              id: videoId,
            },
          });
          const [video] = data.items;
          if (video) {
            setDurationTime(ytDurationFormat(video?.contentDetails?.duration));
            setViewCount(formatView(video?.statistics?.viewCount));
          }
        } catch (error) {
          console.log(error);
        }
      };
      getVideoInfo();
    }
  }, [videoId, keyword]);

  useEffect(() => {
    const getChannelInfo = async () => {
      try {
        const { data } = await axiosInstance.get('/channels', {
          params: {
            part: 'snippet',
            id: channelId,
          },
        });
        setChannelImage(data.items[0].snippet.thumbnails.medium.url);
      } catch (error) {
        console.log(error);
      }
    };

    if (channelId) {
      getChannelInfo();
    }
  }, [channelId]);

  return {
    channelImage,
    durationTime,
    viewCount,
  };
};

export default useVideoInfo;
