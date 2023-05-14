import { TextWithHighlightProps } from './TextTypes';

export const TextWithHighlight = (props: TextWithHighlightProps) => {
  if (!props.highlight) return <span>{props.text}</span>;

  return (
    <span
      dangerouslySetInnerHTML={{
        __html: props.text
          .toLowerCase()
          .replaceAll(
            props.highlight.toLowerCase(),
            (match) => `<span class="text-primary"/>${match}</span>`
          )
          .replaceAll(
            new RegExp(
              // esse regex maluco seleciona apenas highlights que ainda não foram selecionados
              `\b${props.highlight}\b(?!(?:(?!<\/?span)[^<])*<\/span>)`,
              'ig'
            ),
            (match) => `<span class="text-primary"/>${match}</span>`
          ),
      }}
    />
  );
};
