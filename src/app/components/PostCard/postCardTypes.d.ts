type SocialMedias = "twitter"

type Post = typeof import("../../../../public/posts.json")[0] & {
  social: SocialMedias
};

export type PostProps = {
  post: Post;
  search: string;
}