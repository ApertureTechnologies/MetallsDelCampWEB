'use client';

import { useState } from 'react';
import { getSiteContent } from '@/lib/content/loaders';

export default function HeroVideoSimple() {
  const [showVideo, setShowVideo] = useState(false);
  const siteContent = getSiteContent();

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      background: 'linear-gradient(135deg, #1e3a8a, #374151, #166534)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
    }}>
      
      {/* Video Modal */}
      {showVideo && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.9)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <button
            onClick={() => setShowVideo(false)}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: '#dc2626',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              fontSize: '24px',
              cursor: 'pointer',
              zIndex: 1001
            }}
          >
            ✕
          </button>
          
          <iframe
            width="80%"
            height="80%"
            src="https://www.youtube.com/embed/Vpx_hmx2qPU?autoplay=1&mute=1&controls=1"
            title="Video Corporativo Metalls del Camp"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Content */}
      <div style={{ textAlign: 'center', maxWidth: '800px', padding: '20px' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '20px' }}>
          {siteContent.home.claim}
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '40px', opacity: 0.9 }}>
          {siteContent.home.subclaim}
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          <button
            onClick={() => {
              console.log('¡Botón clickeado!');
              setShowVideo(true);
            }}
            style={{
              background: '#dc2626',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              fontSize: '18px',
              fontWeight: 'bold',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            ▶ VER VIDEO CORPORATIVO
          </button>
          
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a 
              href={siteContent.home.ctas.primaryHref}
              style={{
                background: '#2563eb',
                color: 'white',
                padding: '12px 24px',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 'bold'
              }}
            >
              {siteContent.home.ctas.primaryLabel}
            </a>
            <a 
              href={siteContent.home.ctas.secondaryHref}
              style={{
                background: '#059669',
                color: 'white',
                padding: '12px 24px',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 'bold'
              }}
            >
              {siteContent.home.ctas.secondaryLabel}
            </a>
          </div>
        </div>
        
        <p style={{ marginTop: '30px', fontSize: '14px', opacity: 0.7 }}>
          {showVideo ? '🎥 Video reproduciéndose' : '🎬 Haz clic para ver nuestro video corporativo'}
        </p>
      </div>
    </section>
  );
}
