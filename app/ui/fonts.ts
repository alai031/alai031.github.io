import {
  Inter,
  JetBrains_Mono,
  Space_Grotesk,
  Satisfy,
} from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-display',
});

export const satisfy = Satisfy({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
});
