'use client';

import { useEffect, useRef } from 'react';
import { getSiteContent } from '@/lib/content/loaders';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const siteContent = getSiteContent();

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Video autoplay failed, that's ok
      });
    }
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-gray-900">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        poster="/brand/hero.jpg"
        preload="none"
        playsInline
        autoPlay
        muted
        loop
        aria-hidden="true"
      >
        <source src="/brand/hero.webm" type="video/webm" />
        <source src="/brand/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            {siteContent.home.claim}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            {siteContent.home.subclaim}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={siteContent.home.ctas.primaryHref}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label={`Ir a ${siteContent.home.ctas.primaryLabel}`}
            >
              {siteContent.home.ctas.primaryLabel}
            </a>
            <a
              href={siteContent.home.ctas.secondaryHref}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-secondary-500 hover:bg-secondary-600 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label={`Ir a ${siteContent.home.ctas.secondaryLabel}`}
            >
              {siteContent.home.ctas.secondaryLabel}
            </a>
            {siteContent.home.ctas.tertiaryLabel && (
              <a
                href={siteContent.home.ctas.tertiaryHref}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 bg-white hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label={`Ir a ${siteContent.home.ctas.tertiaryLabel}`}
              >
                {siteContent.home.ctas.tertiaryLabel}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
