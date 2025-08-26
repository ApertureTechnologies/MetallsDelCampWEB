// Jest DOM extensions for testing
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import React from 'react';

// Enhanced test setup with better mocks
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock Next.js router with better functionality
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));

// Mock Next.js router (legacy)
vi.mock('next/router', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
    push: vi.fn(),
    replace: vi.fn(),
    reload: vi.fn(),
    back: vi.fn(),
    prefetch: vi.fn(),
    beforePopState: vi.fn(),
    events: {
      on: vi.fn(),
      off: vi.fn(),
      emit: vi.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: 'es',
    domainLocales: [],
    isPreview: false,
  }),
}));

// Mock Next.js Image with better props handling
vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) => {
    return React.createElement('img', props);
  },
}));

// Mock Next.js Link
vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string; [key: string]: unknown }) => {
    return React.createElement('a', { href, ...props }, children);
  },
}));

// Enhanced IntersectionObserver mock
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: class IntersectionObserver {
    root = null;
    rootMargin = '0px';
    thresholds = [0];
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
    takeRecords = vi.fn().mockReturnValue([]);
    
    constructor(callback: IntersectionObserverCallback) {
      // Mock immediate intersection
      setTimeout(() => {
        callback([{
          isIntersecting: true,
          target: document.createElement('div'),
          intersectionRatio: 1,
          boundingClientRect: {} as DOMRectReadOnly,
          intersectionRect: {} as DOMRectReadOnly,
          rootBounds: {} as DOMRectReadOnly,
          time: Date.now(),
        }], this);
      }, 0);
    }
  },
});

// Mock ResizeObserver
Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  configurable: true,
  value: class ResizeObserver {
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
    
    constructor(callback: ResizeObserverCallback) {
      // Mock resize event
      setTimeout(() => {
        callback([{
          target: document.createElement('div'),
          contentRect: {
            width: 1024,
            height: 768,
          } as DOMRectReadOnly,
          borderBoxSize: [],
          contentBoxSize: [],
          devicePixelContentBoxSize: [],
        }], this as unknown as ResizeObserver);
      }, 0);
    }
  },
});

// Mock fetch for API testing
global.fetch = vi.fn();

// Mock ResizeObserver
Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  configurable: true,
  value: class {
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
  },
});
