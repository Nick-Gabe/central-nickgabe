import styles from "./posts.module.css";
import Image from "next/image";

export const NoPostsFound = () => {
  return (<div className={styles.notFound}>
    <h2>Vish, não encontrei nada por aqui...</h2>
    <Image src="/extras/robot.svg" alt="Robô triste" width={200} height={200} />
  </div>
  )
}