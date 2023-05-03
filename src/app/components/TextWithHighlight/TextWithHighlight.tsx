import { TextWithHighlightProps } from "./TextTypes";
import styles from "./TextWithHighlight.module.css";

export const TextWithHighlight = (props: TextWithHighlightProps) => {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: props.text.replaceAll(
          props.highlight,
          `<span class="${styles.highlight}"/>${props.highlight}</span>`
        )
      }}
    />
  )
}