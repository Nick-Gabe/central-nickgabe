import './globals.css';
import 'antd/dist/reset.css';
import { PropsWithChildren, Suspense } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Background } from '@components/Background/Background';
import { Inter } from 'next/font/google';
import { Loading } from '@components/Loading/Loading';
import { Metadata } from 'next';
import { Providers } from '@components/Providers/Providers';

const title = 'Central Nick Gabe';
const description = 'Central para reunir meus conteúdos';
const url = 'https://nickgabe.vercel.app';

export const metadata: Metadata = {
  alternates: {
    canonical: url,
  },
  description,
  icons: {
    apple: './metadata/apple-touch-icon.png',
    icon: './metadata/favicon.ico',
  },
  metadataBase: new URL(url),
  openGraph: {
    description,
    images: ['./metadata/og-image.ico'],
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
    images: ['./metadata/og-image.ico'],
    title,
  },
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '400', '600', '700'],
});

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="pt">
      <body className={`bg-purple ${inter.className}`}>
        <Providers>
          <Suspense fallback={<Loading />}>{props.children}</Suspense>
          <Background />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
