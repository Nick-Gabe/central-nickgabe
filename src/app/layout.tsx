import './globals.css';
import 'antd/dist/reset.css';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { Providers } from '@components/Providers/Providers';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://nickgabe.vercel.app',
  },
  description: 'Central para reunir meus conteúdos',
  metadataBase: new URL('https://nickgabe.vercel.app'),
  openGraph: {
    description: 'Central para reunir meus conteúdos',
    images: [
      /* TODO: Add images */
    ],
    locale: 'pt-BR',
    siteName: 'Central Nick Gabe',
    title: 'Central Nick Gabe',
    type: 'website',
    url: 'https://nickgabe.vercel.app',
  },
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
