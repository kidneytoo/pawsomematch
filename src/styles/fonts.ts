import localFont from 'next/font/local';

export const chulaCharas = localFont({
  src: [
    {
      path: '../../public/fonts/ChulaCharasNew-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path:  '../../public/fonts/ChulaCharasNew.woff2',
      weight: 'normal',
      style: 'normal',
    },
    {
      path:  '../../public/fonts/ChulaCharasNew-Italic.woff2',
      weight: 'normal',
      style: 'italic',
    },
    {
      path:  '../../public/fonts/ChulaCharasNew-BoldItalic.woff2',
      weight: 'bold',
      style: 'italic',
    }
  ],
  variable: '--font-chula-charas'
});

export const chulalongkorn = localFont({
  src: [
    {
      path: '../../public/fonts/Chulalongkorn-Regular.woff2',
      weight: 'normal',
      style: 'normal',
    },
    {
      path:  '../../public/fonts/Chulalongkorn-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
  ],
  variable: '--font-chulalongkorn'
});