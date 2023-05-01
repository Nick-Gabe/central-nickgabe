"use client";

import { Inter } from 'next/font/google'
import { Topbar } from './components/Topbar'
import { Search } from './components/Search'
import { Content } from './components/Content'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <Topbar/>
      <Search setSearch={setSearch}/>
      <Content search={search}/>
    </main>
  )
}
