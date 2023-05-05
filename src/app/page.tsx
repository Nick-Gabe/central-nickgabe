"use client";

import { Search } from './components/Search/Search'
import { Posts } from './components/Posts/Posts'
import { useState } from 'react'
import { Title } from './components/Title/Title';
import { Background } from './components/Background/Background';

export default function Home({ searchParams }: any) {
  const [search, setSearch] = useState(searchParams.search || "");
  const [loading, setLoading] = useState(true);

  return (
    <main className='flex flex-col items-center min-h-screen sm:justify-center my-20'>
      <Title />
      <Search
        search={search}
        setSearch={setSearch}
        setLoading={setLoading}
      />
      <Posts
        search={search}
        loading={loading}
        setLoading={setLoading}
      />
      <Background />
    </main>
  )
}
