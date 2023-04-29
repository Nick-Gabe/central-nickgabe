import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";

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

  return <div className="">{posts.map(post => (
    <div key={post.title}>
      <p>{post.title}</p>
      <p>{post.description}</p>
      <Image src={post.image} alt={post.description} width={500} height={500} />
      <p>{post.url}</p>
    </div>
  ))}</div>
}