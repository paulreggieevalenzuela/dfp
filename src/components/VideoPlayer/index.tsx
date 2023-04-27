import { useEffect, useRef, useState } from 'react';

import s from './VideoPlayer.module.scss';

type VideoProps = {
  src: string;
  width?: number;
  height?: number;
  autoplay?: boolean;
  loop?: boolean;
};

export default function VideoPlayer({
  src,
  width,
  height,
  autoplay = false,
  loop = true,
}: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [playing, setPlaying] = useState(autoplay ? true : false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    handleLoadedMetadata();
  }, [videoRef]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (videoRef.current) {
        setCurrentTime(videoRef.current.currentTime);
        setProgress((videoRef.current.currentTime / videoTime) * 100);
      }
    }, 50);

    return () => clearInterval(intervalId);
  });

  const videoHandler = (control: string) => {
    if (control === 'play' && videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    } else if (control === 'pause' && videoRef.current) {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setVideoTime(videoRef.current.duration);
    }
  };

  function formatTimeElapsed(duration: number) {
    const hrs = ~~(duration / 3600);
    const mins = ~~((duration % 3600) / 60);
    const secs = ~~duration % 60;

    let time = '';

    if (hrs > 0) {
      time += '' + hrs + ':' + (mins < 10 ? '0' : '');
    }

    time += '' + mins + ':' + (secs < 10 ? '0' : '');
    time += '' + secs;
    return time;
  }

  return (
    <div className={s.videoContainer} style={{ width: width, height: height }}>
      <video
        src={src}
        autoPlay={autoplay}
        loop={loop}
        width={width}
        height={height}
        ref={videoRef}
        onLoadedMetadata={handleLoadedMetadata}
        onClick={() => videoHandler(playing ? 'pause' : 'play')}
      />
      <div className={s.controls}>
        <div className={s.videoDuration}>
          <div
            className={s.videoTimeBar}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className={s.videoTimeElapsed}>
          {' '}
          {formatTimeElapsed(currentTime)}{' '}
        </span>
      </div>
    </div>
  );
}
