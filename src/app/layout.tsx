import './globals.css';
import 'antd/dist/reset.css';
import { Analytics } from '@vercel/analytics/react';
import { PropsWithChildren } from 'react';
import { Providers } from '@components/Providers/Providers';

export const metadata = {
  description: 'Central para reunir meus conteúdos',
  title: 'Central Nick Gabe',
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="pt">
      <body className="bg-purple font-inter">
        <Providers>
          {props.children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
