import posts from "../../../../public/posts.json";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search") || "";

  return new Response(JSON.stringify(posts.filter(post => post.full.includes(search))));
}