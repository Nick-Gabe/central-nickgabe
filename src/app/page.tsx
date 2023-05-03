"use client";

import { Search } from './components/Search/Search'
import { Posts } from './components/Posts/Posts'
import { useState } from 'react'
import { Title } from './components/Title/Title';
import { Background } from './components/Background/Background';

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <Title/>
      <Search setSearch={setSearch}/>
      <Posts search={search}/>
      <Background />
    </main>
  )
}
