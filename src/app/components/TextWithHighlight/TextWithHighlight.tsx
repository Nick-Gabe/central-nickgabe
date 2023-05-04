import { TextWithHighlightProps } from "./TextTypes";

export const TextWithHighlight = (props: TextWithHighlightProps) => {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: props.text.replaceAll(
          new RegExp(props.highlight, "ig"),
          (match) => `<span class="text-primary"/>${match}</span>`
        )
      }}
    />
  )
}
