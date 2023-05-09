import { useEffect, useState } from 'react';
import { Loading } from '../Loading/Loading';
import { NoPostsFound } from './NoPostsFound';
import { Post } from '../PostCard/postCardTypes';
import { PostPages } from './PostPages';
import { PostsProps } from './postsTypes';
import axios from 'axios';

export const Posts = (props: PostsProps) => {
  const { loading, setLoading } = props;
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get(`/api/posts?search=${props.search}`).then((response) => {
      setPosts(response.data);
      setLoading(false);
    });
  }, [props.search, setLoading]);

  if (loading) return <Loading />;
  if (posts.length === 0) return <NoPostsFound />;

  return <PostPages posts={posts} search={props.search} />;
};
