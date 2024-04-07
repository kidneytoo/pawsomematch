import localFont from 'next/font/local';

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
      path: './Chulalongkorn-Regular.woff2',
      weight: 'normal',
      style: 'normal',
    },
    {
      path:  './Chulalongkorn-Bold.woff2',
      weight: 'bold',
      style: 'normal',
    },
  ],
  variable: '--font-chulalongkorn'
});