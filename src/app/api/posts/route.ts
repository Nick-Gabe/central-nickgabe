import posts from "@public/posts.json";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search") || "";

  try {
    const regex = new RegExp(search, "ig");

    return new Response(JSON.stringify(posts.filter(post => {
      return regex.test(post.full)
    })));
  } catch (error) {
    return new Response("[]");
  }
}