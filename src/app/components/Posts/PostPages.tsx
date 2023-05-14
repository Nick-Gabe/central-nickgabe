import { useEffect, useState } from 'react';
import ArrowNext from '@public/icons/arrow-right-square.svg';
import ArrowPrev from '@public/icons/arrow-left-square.svg';
import { Pagination } from 'antd';
import { Post } from '@components/PostCard/postCardTypes';
import { PostCard } from '../PostCard/PostCard';
import { PostPagesProps } from './postsTypes';

const postsPerPage = 9;

export const PostPages = (props: PostPagesProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setPosts(
      props.posts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
      )
    );
  }, [currentPage, props.posts]);

  return (
    <>
      <div className="grid gap-10 max-w-[90vw] mb-5 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1600px] lg:px-10">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} search={props.search} />
        ))}
      </div>
      <Pagination
        current={currentPage}
        pageSize={postsPerPage}
        total={props.posts.length}
        showLessItems
        responsive
        onChange={setCurrentPage}
        hideOnSinglePage
        prevIcon={<ArrowPrev className="w-10" />}
        nextIcon={<ArrowNext className="w-10" />}
        className="mt-4 mb-20 text-[50px] border-2 border-purple p-2 sm:px-5 pt-0 pb-5 rounded-2xl overflow-hidden"
      />
    </>
  );
};
