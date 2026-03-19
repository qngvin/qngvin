import localFont from 'next/font/local';
import { Rubik } from 'next/font/google';
export const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-rubik',
  display: 'swap',
});
export const neueMontreal = localFont({
  src: [
    {
      path: '../fonts/NeueMontreal-Light.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../fonts/NeueMontreal-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/NeueMontreal-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/NeueMontreal-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-neue-montreal',
  display: 'swap',
});
