import json from "../../../../public/posts.json";

type SocialMedias = "twitter"

type Post = typeof json[0] & {
  social: SocialMedias
};

export type PostProps = {
  post: Post;
  search: string;
}