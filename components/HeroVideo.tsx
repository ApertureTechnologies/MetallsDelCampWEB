'use client';

import { useState } from 'react';
import { getSiteContent } from '@/lib/content/loaders';

export default function HeroVideo() {
  const [showYouTubePlayer, setShowYouTubePlayer] = useState(false);
  const siteContent = getSiteContent();

  // YouTube Video ID extraído de https://www.youtube.com/watch?v=Vpx_hmx2qPU
  const youtubeVideoId = 'Vpx_hmx2qPU';

  return (
    <section 
      className="relative overflow-hidden bg-gray-900"
      style={{ height: '100vh' }}
    >
      {/* Fondo con gradiente atractivo */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(135deg, #1e3a8a, #374151, #166534)',
          zIndex: 0
        }}
      />

      {/* YouTube Video Player (solo cuando se activa) */}
      {showYouTubePlayer && (
        <div 
          className="fixed inset-0 w-full h-full flex items-center justify-center"
          style={{
            backgroundColor: 'rgba(0,0,0,0.9)',
            zIndex: 1000
          }}
        >
          <button
            onClick={() => {
              console.log('❌ Cerrando video player');
              setShowYouTubePlayer(false);
            }}
            className="absolute bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors"
            style={{
              top: '20px',
              right: '20px',
              zIndex: 1001
            }}
            aria-label="Cerrar video"
          >
            ✕
          </button>
          
          <iframe
            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}&controls=1&rel=0&modestbranding=1&playsinline=1`}
            allow="autoplay; fullscreen"
            allowFullScreen
            style={{
              width: '90%',
              height: '90%',
              border: 'none',
            }}
            title="Video corporativo Metalls del Camp"
            onLoad={() => console.log('✅ Iframe cargado')}
            onError={() => console.log('❌ Error cargando iframe')}
          />
        </div>
      )}

      {/* Dark Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(0,0,0,0.4)',
          zIndex: 20
        }}
      />

      {/* Content */}
      <div 
        className="relative h-full flex items-center justify-center text-white text-center"
        style={{
          zIndex: 30,
          paddingTop: '4rem'
        }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 
            className="font-bold mb-6"
            style={{
              fontSize: 'clamp(2rem, 8vw, 4rem)'
            }}
          >
            {siteContent.home.claim}
          </h1>
          <p 
            className="mb-8 opacity-90"
            style={{
              fontSize: 'clamp(1rem, 3vw, 1.5rem)',
              maxWidth: '48rem',
              margin: '0 auto 2rem auto'
            }}
          >
            {siteContent.home.subclaim}
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-4 items-center">
            {/* Botón para reproducir video - MÁS VISIBLE */}
            {!showYouTubePlayer && (
              <button
                onClick={() => {
                  console.log('🎬 Botón de video clickeado!');
                  setShowYouTubePlayer(true);
                }}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors mb-4 shadow-2xl"
                style={{
                  border: '2px solid #dc2626',
                  animation: 'pulse 2s infinite'
                }}
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5v10l7-5z"/>
                </svg>
                🎥 VER VIDEO CORPORATIVO 🎥
              </button>
            )}
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={siteContent.home.ctas.primaryHref}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-lg"
                aria-label={`Ir a ${siteContent.home.ctas.primaryLabel}`}
              >
                {siteContent.home.ctas.primaryLabel}
              </a>
              <a
                href={siteContent.home.ctas.secondaryHref}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors shadow-lg"
                aria-label={`Ir a ${siteContent.home.ctas.secondaryLabel}`}
              >
                {siteContent.home.ctas.secondaryLabel}
              </a>
              {siteContent.home.ctas.tertiaryLabel && (
                <a
                  href={siteContent.home.ctas.tertiaryHref}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 bg-white hover:bg-gray-100 rounded-lg transition-colors shadow-lg"
                  aria-label={`Ir a ${siteContent.home.ctas.tertiaryLabel}`}
                >
                  {siteContent.home.ctas.tertiaryLabel}
                </a>
              )}
            </div>
          </div>

          {/* Indicador de video disponible */}
          <div className="mt-8 text-sm opacity-60">
            {showYouTubePlayer ? (
              <span className="text-green-300">🎥 Reproduciendo video corporativo</span>
            ) : (
              <span className="text-blue-300">🎬 Video corporativo disponible</span>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 text-white opacity-60"
        style={{
          bottom: '2rem',
          zIndex: 30
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Descubre más</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
