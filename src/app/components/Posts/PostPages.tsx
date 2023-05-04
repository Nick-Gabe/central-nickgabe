import styles from "./posts.module.css";
import { PostCard } from "../PostCard/PostCard";
import { PostPagesProps } from "./postsTypes";

export const PostPages = (props: PostPagesProps) => {
  return (
    <div className={styles.container}>
      {props.posts.map(post => (
        <PostCard key={post.id} post={post} search={props.search} />
      ))}
    </div>
  )
}