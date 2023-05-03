"use client";

import { Search } from './components/Search/Search'
import { Content } from './components/Content'
import { useState } from 'react'
import { Title } from './components/Title/Title';

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <Title/>
      <Search setSearch={setSearch}/>
      <Content search={search}/>
    </main>
  )
}
