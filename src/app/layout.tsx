import './globals.css';
import 'antd/dist/reset.css';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { Providers } from '@components/Providers/Providers';

const title = 'Central Nick Gabe';
const description = 'Central para reunir meus conteúdos';
const url = 'https://nickgabe.vercel.app';

export const metadata: Metadata = {
  alternates: {
    canonical: url,
  },
  description,
  metadataBase: new URL(url),
  openGraph: {
    description,
    images: [
      /* TODO: Add images */
    ],
    locale: 'pt-BR',
    siteName: title,
    title,
    type: 'website',
    url: url,
  },
  title,
  twitter: {
    creator: '@ImNickGabe',
    creatorId: '930575742060154885',
    description,
    images: [
      /* TODO: Add images */
    ],
    title,
  },
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
