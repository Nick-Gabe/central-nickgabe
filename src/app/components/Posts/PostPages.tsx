import styles from "./posts.module.css";
import { PostCard } from "../PostCard/PostCard";
import { PostPagesProps } from "./postsTypes";
import { Post } from "@components/PostCard/postCardTypes";

const sortByDate = (a: Post, b: Post) => {
  return new Date(a.date) < new Date(b.date) ? 1 : -1
}

export const PostPages = (props: PostPagesProps) => {
  return (
    <div className={styles.container}>
      {props.posts.sort(sortByDate).map(post => (
        <PostCard key={post.id} post={post} search={props.search} />
      ))}
    </div>
  )
}