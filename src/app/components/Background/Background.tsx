import Image from "next/image";
import styles from "./background.module.css"

export const Background = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.background}
        src="/extras/bg-wave.svg"
        alt=""
        width={1440}
        height={368}
      />
      <div className={styles.bgColor}></div>
    </div>
  );
};
