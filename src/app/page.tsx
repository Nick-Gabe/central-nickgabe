"use client";

import { Search } from './components/Search/Search'
import { Posts } from './components/Posts/Posts'
import { useState } from 'react'
import { Title } from './components/Title/Title';
import { Background } from './components/Background/Background';
import { Loading } from './components/Loading/Loading';

export default function Home() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <Title/>
      <Search setSearch={setSearch} setLoading={setLoading}/>
      <Posts
        search={search}
        loading={loading}
        setLoading={setLoading}
      />
      <Background />
    </main>
  )
}
