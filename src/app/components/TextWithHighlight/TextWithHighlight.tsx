import { TextWithHighlightProps } from "./TextTypes";
import styles from "./TextWithHighlight.module.css";

export const TextWithHighlight = (props: TextWithHighlightProps) => {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: props.text.replaceAll(
          new RegExp(props.highlight, "ig"),
          (match) => `<span class="${styles.highlight}"/>${match}</span>`
        )
      }}
    />
  )
}