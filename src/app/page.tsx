'use client';

import { Background } from './components/Background/Background';
import { GithubCorner } from '@components/GithubCorner/GithubCorner';
import { Posts } from './components/Posts/Posts';
import { Search } from './components/Search/Search';
import { Title } from './components/Title/Title';
import { useState } from 'react';

export default function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const [search, setSearch] = useState(searchParams.search || '');
  const [loading, setLoading] = useState(true);

  return (
    <main className="flex flex-col items-center min-h-screen sm:justify-center my-20">
      <GithubCorner />
      <Title />
      <Search search={search} setSearch={setSearch} setLoading={setLoading} />
      <Posts search={search} loading={loading} setLoading={setLoading} />
      <Background />
    </main>
  );
}
