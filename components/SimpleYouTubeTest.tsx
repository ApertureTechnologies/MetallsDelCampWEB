'use client';

import YouTube from 'react-youtube';

export default function SimpleYouTubeTest() {
  return (
    <div className="fixed top-4 left-4 z-50 bg-white p-4 border border-blue-500 rounded">
      <h3 className="text-sm font-bold mb-2">Test Simple YouTube</h3>
      <YouTube 
        videoId="dQw4w9WgXcQ" 
        opts={{
          height: '200',
          width: '320',
          playerVars: {
            autoplay: 0,
            controls: 1,
          },
        }}
        onReady={() => console.log('✅ Video simple listo')}
        onError={(e) => console.error('❌ Error video simple:', e)}
      />
    </div>
  );
}
