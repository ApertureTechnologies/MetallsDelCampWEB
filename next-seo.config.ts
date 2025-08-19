import { DefaultSeoProps } from 'next-seo';
import brandConfig from './brand.config';

const nextSeoConfig: DefaultSeoProps = {
  defaultTitle: brandConfig.seo.defaultTitle,
  titleTemplate: brandConfig.seo.titleTemplate,
  description: brandConfig.seo.description,
  canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://metallsdelcamp.com',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://metallsdelcamp.com',
    siteName: brandConfig.seo.openGraph.siteName,
    images: brandConfig.seo.openGraph.images,
  },
  twitter: brandConfig.seo.twitter,
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: brandConfig.theme.colors.primary[600],
    },
    {
      httpEquiv: 'x-ua-compatible',
      content: 'IE=edge',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/brand/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
};

export default nextSeoConfig;
