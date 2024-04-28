import localFont from 'next/font/local';
import { Noto_Sans_Thai_Looped } from 'next/font/google';

export const chulaCharas = localFont({
  src: [
    {
      path: './ChulaCharasNew-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path:  './ChulaCharasNew.woff2',
      weight: 'normal',
      style: 'normal',
    },
    {
      path:  './ChulaCharasNew-Italic.woff2',
      weight: 'normal',
      style: 'italic',
    },
    {
      path:  './ChulaCharasNew-BoldItalic.woff2',
      weight: 'bold',
      style: 'italic',
    }
  ],
  variable: '--font-chula-charas'
});

export const chulalongkorn = localFont({
  src: [
    {
      path: './CHULALONGKORN-Regular.woff2',
      weight: 'normal',
      style: 'normal',
    },
    {
      path:  './CHULALONGKORN-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
  ],
  variable: '--font-chulalongkorn'
});

export const notoSans = Noto_Sans_Thai_Looped({
  weight: ['500', '700'],
  subsets: ['thai', 'latin'],
  variable: '--font-noto-sans'
})