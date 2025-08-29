import localFont from 'next/font/local';

// Inter - Fuente principal para texto general
export const inter = localFont({
  src: [
    {
      path: './fonts/Inter/Inter-VariableFont_opsz,wght.ttf',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: './fonts/Inter/Inter-Italic-VariableFont_opsz,wght.ttf',
      weight: '100 900',
      style: 'italic',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
});

// Poppins - Fuente para títulos y elementos destacados
export const poppins = localFont({
  src: [
    {
      path: './fonts/Poppins/Poppins-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Poppins/Poppins-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/Poppins/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Poppins/Poppins-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Poppins/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Poppins/Poppins-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/Poppins/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Poppins/Poppins-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: './fonts/Poppins/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Poppins/Poppins-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-poppins',
  display: 'swap',
});

// JetBrains Mono - Fuente monoespaciada para código
export const jetbrainsMono = localFont({
  src: [
    {
      path: './fonts/JetBrainsMono-2.304/fonts/variable/JetBrainsMono[wght].ttf',
      weight: '100 800',
      style: 'normal',
    },
    {
      path: './fonts/JetBrainsMono-2.304/fonts/variable/JetBrainsMono-Italic[wght].ttf',
      weight: '100 800',
      style: 'italic',
    },
  ],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});
