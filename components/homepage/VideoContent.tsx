import React, { useState, useRef, useEffect } from 'react';
import { VideoBlog, videoContentData } from '@/public/data/TopSlideData';
import Image from 'next/image';

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  const videoRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVideoEnded = () => {
    videoRef.current.currentTime = 0;
    videoRef.current?.play();
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    let observer: IntersectionObserver;

    if (videoElement) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              videoElement.play();
              setIsPlaying(true);
            } else {
              videoElement.pause();
              setIsPlaying(false);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.5, // Adjust this threshold value as needed
        }
      );

      observer.observe(videoElement);
    }

    return () => {
      if (observer && videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  
  return (
    <div className='videocontent_wrapper'>

      <div className='videocontent_container'>

          <div onClick={handlePlayPause} className="video-player">
            <video
              ref={videoRef}
              src={src}
              className="video-player__video"
              onEnded={handleVideoEnded}
            />

            <div
              className={`video-player__controls ${isPlaying ? 'playHide' : ''}`}
            >
              <button className="video-player__play-button">
                Play
              </button>
            </div>
          </div>

          <div className='video-content-text'>
            <p>BONUS PACKS</p>
            <p>Qualify for the following Bonus Packs by purchasing the Bonus Pack number of Legion Universe Digital Trading Cards. A Bonus Pack gives you additional physical bonuses (items mailed to you) as well as potential opportunities to join with us in the physical production and premiers of the films.</p>
          </div>

          <div className='videocontent-icons'>
           {
             videoContentData.map((item:VideoBlog) => {
              return (
                <div  key={item.id}>
                  <div className='video-icon-div'>
                    <Image 
                        src={item.url}
                        alt='Icon'
                        loading='lazy'
                    />
                    </div>
                    
                  <span>{item.text}</span>
                  </div>
              )
             })
           }
          </div>

          <div className='container video-content-offer'>
              <p>Seize this unparalleled opportunity to claim your very own, exceptionally rare, limitededition treasure for 80 MATIC [$86 USD]</p>
              <div className='video-content-offer-mintNow'>
                <div>Mint now</div>
                <div>an offer that won't come knockingagain!</div>
              </div>
          </div>
      </div>


    </div>
  );
};

export default VideoPlayer;
