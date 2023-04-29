import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type ContentProps = {
  search: string;
}

export const Content = (props: ContentProps) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async function () {
      const response = await axios.get(`/api/posts?search=${props.search}`);
      setPosts(response.data);
    })();
  }, [props.search])

  return <div>
    {posts.map(post => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <Image src={post.image} alt={post.description} width={500} height={500} />
        <Link href={post.url}>{post.url}</Link>
      </div>
    ))}
  </div>
}