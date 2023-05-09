import { useEffect, useState } from 'react';
import { Loading } from '../Loading/Loading';
import { NoPostsFound } from './NoPostsFound';
import { Post } from '../PostCard/postCardTypes';
import { PostPages } from './PostPages';
import { PostsProps } from './postsTypes';
import axios from 'axios';

const sortByDate = (a: Post, b: Post) => {
  return new Date(a.date) < new Date(b.date) ? 1 : -1;
};

export const Posts = (props: PostsProps) => {
  const { loading, setLoading } = props;
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get(`/api/posts?search=${props.search}`).then((response) => {
      const postsSortedByDate = response.data.sort(sortByDate);
      setPosts(postsSortedByDate);
      setLoading(false);
    });
  }, [props.search, setLoading]);

  if (loading) return <Loading />;
  if (posts.length === 0) return <NoPostsFound />;

  return <PostPages posts={posts} search={props.search} />;
};
