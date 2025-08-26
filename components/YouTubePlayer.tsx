'use client';

import React from 'react';
import YouTube, { YouTubeProps, YouTubeEvent } from 'react-youtube';

interface YouTubePlayerProps {
  videoId: string;
  autoplay?: boolean;
  mute?: boolean;
  loop?: boolean;
  controls?: boolean;
  showInfo?: boolean;
  modestBranding?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onReady?: () => void;
  onError?: () => void;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  videoId,
  autoplay = false,
  mute = false,
  loop = false,
  controls = true,
  showInfo = true,
  modestBranding = false,
  className = '',
  style = {},
  onReady,
  onError,
}) => {
  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: autoplay ? 1 : 0,
      mute: mute ? 1 : 0,
      loop: loop ? 1 : 0,
      controls: controls ? 1 : 0,
      showinfo: showInfo ? 1 : 0,
      modestbranding: modestBranding ? 1 : 0,
      rel: 0, // No mostrar videos relacionados
      playsinline: 1, // Para móviles
      enablejsapi: 1, // Habilitar JavaScript API
      playlist: loop ? videoId : undefined, // Necesario para el loop
    },
  };

  const handleReady = (event: YouTubeEvent) => {
    if (onReady) {
      onReady();
    }
    
    // Si autoplay y mute están activados, intentar reproducir
    if (autoplay && mute) {
      try {
        event.target.playVideo();
      } catch {
        // Autoplay failed
      }
    }
  };

  const handleError = () => {
    if (onError) {
      onError();
    }
  };

  return (
    <div className={className} style={style}>
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={handleReady}
        onError={handleError}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default YouTubePlayer;
