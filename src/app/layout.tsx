import { PropsWithChildren } from 'react'
import { Analytics } from '@vercel/analytics/react';
import { Providers } from '@components/Providers/Providers';
import './globals.css'
import 'antd/dist/reset.css';

export const metadata = {
  title: 'Central Nick Gabe',
  description: 'Central para reunir meus conteúdos',
}

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="pt">
      <body className='bg-purple font-inter'>
        <Providers>
          {props.children}
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
