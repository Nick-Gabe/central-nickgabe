import axios from "axios";
import { useEffect, useState } from "react";
import { PostCard } from "../PostCard/PostCard";
import { Post } from "../PostCard/postCardTypes";
import styles from "./posts.module.css";
import { ContentProps } from "./postsTypes";
import { Loading } from "../Loading/Loading";
import Image from "next/image";

export const Posts = (props: ContentProps) => {
  const { loading, setLoading } = props;
  const [posts, setPosts] = useState<Post[]>([]);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    (async function () {
      const response = await axios.get(`/api/posts?search=${props.search}`);
      setPosts(response.data);
    })();
  }, [props.search])

  useEffect(() => {
    if(isFirstLoad && !posts.length) return
    setIsFirstLoad(false);
    setLoading(false);
  }, [posts, setLoading, isFirstLoad])

  if (loading) return <Loading />

  return posts.length ?
    <div className={styles.container}>
      {posts.map(post => (
        <PostCard key={post.id} post={post} search={props.search} />
      ))}
    </div>
    : (
      <div className={styles.notFound}>
        <h2>Vish, não encontrei nada por aqui...</h2>
        <Image src="/extras/robot.svg" alt="Robô triste" width={200} height={200} />
      </div>
    )

}