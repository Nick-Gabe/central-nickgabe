import { PostCard } from "../PostCard/PostCard";
import { PostPagesProps } from "./postsTypes";
import { Post } from "@components/PostCard/postCardTypes";

const sortByDate = (a: Post, b: Post) => {
  return new Date(a.date) < new Date(b.date) ? 1 : -1
}

export const PostPages = (props: PostPagesProps) => {
  return (
    <div className='grid gap-10 max-w-[90vw] mb-5 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1600px] lg:px-10'>
      {props.posts.sort(sortByDate).map(post => (
        <PostCard key={post.id} post={post} search={props.search} />
      ))}
    </div>
  )
}
