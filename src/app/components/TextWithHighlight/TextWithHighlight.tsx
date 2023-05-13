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
            new RegExp(props.highlight, 'ig'),
            (match) => `<span class="text-primary"/>${match}</span>`
          ),
      }}
    />
  );
};
