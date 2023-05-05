import { PostCard } from "../PostCard/PostCard";
import { PostPagesProps } from "./postsTypes";
import { Post } from "@components/PostCard/postCardTypes";
import { Pagination, ConfigProvider } from "antd";
import { useState } from "react";

const postsPerPage = 12;

const sortByDate = (a: Post, b: Post) => {
  return new Date(a.date) < new Date(b.date) ? 1 : -1
}

export const PostPages = (props: PostPagesProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <ConfigProvider
      theme={{
        components: {
          Pagination: {
            colorPrimary: "#1c1917",
            colorPrimaryHover: "#ec4899",
          }
        }
      }}
    >
      <div className='grid gap-10 max-w-[90vw] mb-5 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-[1600px] lg:px-10'>
        {props.posts.sort(sortByDate).slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage).map((post) => (
          <PostCard key={post.id} post={post} search={props.search} />
        ))}
      </div>
      <Pagination
        current={currentPage}
        pageSize={postsPerPage}
        total={props.posts.length}
        onChange={setCurrentPage}
        hideOnSinglePage
        className="mt-4 mb-2"
      />
    </ConfigProvider>
  )
}
