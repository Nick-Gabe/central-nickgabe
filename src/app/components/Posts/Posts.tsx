import axios from "axios";
import { useEffect, useState } from "react";
import { Post } from "../PostCard/postCardTypes";
import { PostsProps } from "./postsTypes";
import { Loading } from "../Loading/Loading";
import { NoPostsFound } from "./NoPostsFound";
import { PostPages } from "./PostPages";

export const Posts = (props: PostsProps) => {
  const { loading, setLoading } = props;
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get(`/api/posts?search=${props.search}`)
      .then((response) => {
        setPosts(response.data)
        setLoading(false)
      })
  }, [props.search, setLoading])

  if (loading) return <Loading />
  if (posts.length === 0) return <NoPostsFound />

  return <PostPages posts={posts} search={props.search} />
}