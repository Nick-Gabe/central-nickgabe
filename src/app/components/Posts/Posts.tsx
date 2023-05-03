import axios from "axios";
import { useEffect, useState } from "react";
import { PostCard } from "../PostCard/PostCard";
import { Post } from "../PostCard/postCardTypes";
import styles from "./posts.module.css";
import { ContentProps } from "./postsTypes";
import { Loading } from "../Loading/Loading";

export const Posts = (props: ContentProps) => {
  const { loading, setLoading } = props;
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async function () {
      const response = await axios.get(`/api/posts?search=${props.search}`);
      setPosts(response.data);
    })();
  }, [props.search])

  useEffect(() => {
    setLoading(false);
  }, [posts, setLoading])

  if (loading) return <Loading />

  return <div className={styles.container}>
    {posts.map(post => (
      <PostCard key={post.id} post={post} search={props.search} />
    ))}
  </div>
}