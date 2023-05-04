import { Dispatch, SetStateAction } from "react";
import { Post } from "../PostCard/postCardTypes";

export type PostsProps = {
  search: string;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export type PostPagesProps = {
  posts: Post[];
  search: string;
}