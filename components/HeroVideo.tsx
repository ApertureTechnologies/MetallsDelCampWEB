'use client';

import { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { HiChevronDown } from 'react-icons/hi';
import { getSiteContent } from '@/lib/content/loaders';

export default function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(true); // Video inicia reproduciendo
  const videoRef = useRef<HTMLVideoElement>(null);
  const siteContent = getSiteContent();

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section 
      className="relative overflow-hidden bg-gray-900"
      style={{ height: '100vh' }}
    >
      {/* Fondo con imagen del catálogo */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/brand/img_catalogo.jpg)',
          zIndex: 0
        }}
      />

      {/* Overlay gradiente para mejorar legibilidad */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.7), rgba(55, 65, 81, 0.8), rgba(22, 101, 52, 0.7))',
          zIndex: 10
        }}
      />

      {/* Video Player integrado en el hero - Siempre visible */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          zIndex: 20
        }}
      >
        <video
          ref={videoRef}
          src="/videos/hero-video.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />
      </div>

      {/* Dark Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: 'rgba(0,0,0,0.3)',
          zIndex: 15
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
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={siteContent.home.ctas.primaryHref}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-lg cursor-pointer"
                aria-label={`Ir a ${siteContent.home.ctas.primaryLabel}`}
              >
                {siteContent.home.ctas.primaryLabel}
              </a>
              <a
                href={siteContent.home.ctas.secondaryHref}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-green-600 hover:bg-green-700 rounded-lg transition-colors shadow-lg cursor-pointer"
                aria-label={`Ir a ${siteContent.home.ctas.secondaryLabel}`}
              >
                {siteContent.home.ctas.secondaryLabel}
              </a>
              {siteContent.home.ctas.tertiaryLabel && (
                <a
                  href={siteContent.home.ctas.tertiaryHref}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 bg-yellow-400 hover:bg-yellow-300 rounded-lg transition-all duration-300 shadow-lg cursor-pointer purple-glow-button"
                  aria-label={`Ir a ${siteContent.home.ctas.tertiaryLabel}`}
                >
                  {siteContent.home.ctas.tertiaryLabel}
                </a>
              )}
            </div>
          </div>

          {/* Botón de play/pause pequeño y redondo */}
          <div className="mt-8 flex items-center justify-center gap-4">
            {/* Botón de play/pause */}
            <button
              onClick={toggleVideo}
              className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl hover:shadow-red-500/25 hover:scale-110 cursor-pointer border-4 border-white/20"
              aria-label={isPlaying ? "Pausar video corporativo" : "Reproducir video corporativo"}
            >
              {isPlaying ? (
                // Icono de pausa mejorado
                <FaPause className="w-8 h-8 text-white" />
              ) : (
                // Icono de play mejorado y centrado
                <FaPlay className="w-8 h-8 text-white ml-1" />
              )}
            </button>
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
          <HiChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
