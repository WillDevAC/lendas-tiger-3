import { useEffect, useRef } from 'react';

interface CloudinaryPlayer {
  videoPlayer: (element: HTMLVideoElement, options: { cloud_name: string }) => void;
}

declare global {
  interface Window {
    cloudinary: CloudinaryPlayer;
  }
}

function VideoPlayer(): JSX.Element {
  const cloudinaryRef = useRef<CloudinaryPlayer | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (cloudinaryRef.current) return;

    cloudinaryRef.current = window.cloudinary;
    if (cloudinaryRef.current) {
      cloudinaryRef.current.videoPlayer(videoRef.current!, {
        cloud_name: 'tutorial'
      });
    }
  }, []);

  return (
    <video
      ref={videoRef}
    />
  );
}

export default VideoPlayer;
