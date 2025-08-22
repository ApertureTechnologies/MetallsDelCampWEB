'use client';

import React from 'react';
import YouTube from 'react-youtube';

export default function YouTubeTest() {
  const opts = {
    height: '200',
    width: '320',
    playerVars: {
      autoplay: 0, // Cambiado a 0 para evitar problemas de autoplay
      mute: 1,
      controls: 1, // Mostrar controles para poder hacer click
    },
  };

  const handleReady = (event: unknown) => {
    console.log('🎥 Video test listo:', event);
  };

  const handleError = (event: unknown) => {
    console.error('❌ Error en video test:', event);
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-white p-2 border border-red-500">
      <h3 className="text-sm font-bold mb-2">YouTube Test</h3>
      <YouTube
        videoId="Vpx_hmx2qPU"
        opts={opts}
        onReady={handleReady}
        onError={handleError}
      />
    </div>
  );
}
