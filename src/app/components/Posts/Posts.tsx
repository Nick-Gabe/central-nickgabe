import axios from "axios";
import { useEffect, useState } from "react";
import { PostCard } from "../PostCard/PostCard";
import { Post } from "../PostCard/postCardTypes";
import styles from "./posts.module.css";
import { ContentProps } from "./postsTypes";

export const Posts = (props: ContentProps) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async function () {
      const response = await axios.get(`/api/posts?search=${props.search}`);
      setPosts(response.data);
    })();
  }, [props.search])

  return <div className={styles.container}>
    {posts.map(post => (
      <PostCard key={post.id} post={post} search={props.search} />
    ))}
  </div>
}