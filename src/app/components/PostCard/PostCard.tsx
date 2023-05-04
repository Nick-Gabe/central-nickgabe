import type { Post, PostProps } from "./postCardTypes";
import styles from "./postCard.module.css";
import Image from "next/image";
import { useMemo } from "react";
import { format } from "date-fns";
import Link from "next/link";
import { TextWithHighlight } from "../TextWithHighlight/TextWithHighlight";

export const PostCard = ({ post, search }: PostProps) => {
  const formattedDate = useMemo(() => {
    const date = new Date(post.date);
    return format(date, "dd/MM/yyyy")
  }, [post])

  return (
    <Link href={post.url} target="_blank" className={styles.container}>
      <article>
        <Image
          className={styles.banner}
          src={post.image}
          alt="Post banner"
          width={1280}
          height={720}
        />
        <div className={styles.content}>
          
          <h2 className={styles.title}>
            <TextWithHighlight text={post.title} highlight={search} />
          </h2>
          <p className={styles.description}>
            <TextWithHighlight text={post.description} highlight={search} />
          </p>

          <div className={styles.footer}>
            <div>
              <Image
                className={styles.socialIcon}
                src={`/icons/post-types/${post.type}.svg`}
                alt={`Esse conteúdo é ${post.type}`}
                width={25}
                height={25}
              />
            </div>
            <div>
              <time dateTime={post.date}>{formattedDate}</time>
              <Image
                className={styles.socialIcon}
                src={`/social/${post.social}.svg`}
                alt={`Ícone da rede social ${post.social}`}
                width={25}
                height={25}
              />
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};
