import { Inter, Roboto } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const roboto = Roboto({
  weight: ['400', '700'], // Specify the font weights you need
  subsets: ['latin'], // Specify character subsets
  display: 'swap', // Optional: improves font loading behavior
  variable: '--font-roboto', // Optional: creates a CSS variable
});