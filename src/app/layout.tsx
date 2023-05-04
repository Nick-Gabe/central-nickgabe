import { PropsWithChildren } from 'react'
import './globals.css'
import 'antd/dist/reset.css';

export const metadata = {
  title: 'Centro Nick Gabe',
  description: 'Centro para reunir meus conteúdos',
}

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="pt">
      <body>{props.children}</body>
    </html>
  )
}
