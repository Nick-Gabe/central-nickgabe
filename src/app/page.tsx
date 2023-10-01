'use client';

import { useCallback, useEffect, useState } from 'react';
import { Background } from './components/Background/Background';
import { GithubCorner } from '@components/GithubCorner/GithubCorner';
import { Posts } from './components/Posts/Posts';
import { Search } from './components/Search/Search';
import { Title } from './components/Title/Title';

type Params = {
  search: string;
  page: string;
};

export default function Home({ searchParams }: { searchParams: Params }) {
  const [search, setSearch] = useState(searchParams.search || '');
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  const updateQuery = useCallback((query = new URLSearchParams()) => {
    const { origin } = window;
    const queryStr = query.toString();
    const params = queryStr ? '?' + queryStr : '';

    window.history.replaceState({}, '', origin + params);
  }, []);

  useEffect(() => {
    const pageParam = Number(searchParams.page);
    if (page === 0 && pageParam > 0) return setPage(pageParam);
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, searchParams.page]);

  useEffect(() => {
    const params: Partial<Params> = {};
    if (page > 1) params.page = page.toString();
    if (search) params.search = search;

    if (Object.keys(params).length === 0 && page > 1) return;

    const URLParams = new URLSearchParams(params);
    updateQuery(URLParams);
  }, [page, search, updateQuery]);

  return (
    <main className="flex flex-col items-center min-h-screen sm:justify-center my-20">
      <GithubCorner />
      <Title />
      <Search search={search} setSearch={setSearch} setLoading={setLoading} />
      <Posts
        search={search}
        loading={loading}
        setLoading={setLoading}
        pageHooks={[page, setPage]}
      />
    </main>
  );
}
