import styles from "./posts.module.css";
import { PostCard } from "../PostCard/PostCard";
import { PostPagesProps } from "./postsTypes";
import { Post } from "@components/PostCard/postCardTypes";
import { Pagination } from "antd";
import { useState } from "react";

const postsPerPage = 12;

const sortByDate = (a: Post, b: Post) => {
  return new Date(a.date) < new Date(b.date) ? 1 : -1
}

export const PostPages = (props: PostPagesProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <div className={styles.container}>
        {props.posts.sort(sortByDate).slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage).map((post) => (
          <PostCard key={post.id} post={post} search={props.search} />
        ))}
      </div>
      {(
        <Pagination
          current={currentPage}
          pageSize={postsPerPage}
          total={props.posts.length}
          onChange={setCurrentPage}
          hideOnSinglePage
          className="mt-4 mb-2"
        />
      )}
    </>
  )
}
