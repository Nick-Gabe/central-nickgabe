import Image from 'next/image';
import Link from 'next/link';
import type { PostProps } from './postCardTypes';
import { TextWithHighlight } from '../TextWithHighlight/TextWithHighlight';
import { format } from 'date-fns';
import styles from './postCard.module.css';
import { useMemo } from 'react';

export const PostCard = ({ post, search }: PostProps) => {
  const formattedDate = useMemo(() => {
    const date = new Date(post.date);
    return format(date, 'dd/MM/yyyy');
  }, [post]);

  return (
    <Link
      href={post.url}
      target="_blank"
      className={`flex flex-col justify-end relative rounded-3xl overflow-hidden min-h-[300px] border-2 translate-x-0 translate-y-0 transition-all duration-300 ease-in ${styles.container}`}
      onClick={(e) => e.currentTarget.blur()}
    >
      <article>
        {post.image ? (
          <Image
            className="absolute h-full object-cover z-[-1] top-[-10%]"
            src={post.image}
            alt="Post banner"
            width={1280}
            height={720}
          />
        ) : (
          <div className="absolute h-full object-cover z-[-1] top-[-10%] bg-[#333] w-full flex items-center justify-center">
            <Image
              src={`/social/${post.social}.svg`}
              alt={`Ícone da rede social ${post.social}`}
              width={64}
              height={64}
            />
          </div>
        )}
        <div
          className={`flex flex-col gap-2 text-white p-5 z-10 ${styles.content}`}
        >
          <h2 className="font-bold text-lg m-0 line-clamp-2">
            <TextWithHighlight text={post.title} highlight={search} />
          </h2>
          <p className={`line-clamp-2 ${styles.description}`}>
            <TextWithHighlight text={post.description} highlight={search} />
          </p>

          <div className="flex items-center justify-between opacity-50 font-light">
            <div className="flex items-center gap-3">
              <Image
                className={styles.socialIcon}
                src={`/icons/post-types/${post.type}.svg`}
                alt={`Esse conteúdo é ${post.type}`}
                width={25}
                height={25}
              />
            </div>
            <div className="flex items-center gap-3">
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
