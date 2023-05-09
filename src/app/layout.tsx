import './globals.css';
import 'antd/dist/reset.css';
import { Analytics } from '@vercel/analytics/react';
import { PropsWithChildren } from 'react';

export const metadata = {
  description: 'Central para reunir meus conteúdos',
  title: 'Central Nick Gabe',
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="pt">
      <body className="bg-purple font-inter">
        {props.children}
        <Analytics />
      </body>
    </html>
  );
}
