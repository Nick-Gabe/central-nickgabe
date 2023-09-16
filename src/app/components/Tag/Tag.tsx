import { TagNames, tagColors } from './tagColors';

type TagProps = {
  name: TagNames;
  className?: string;
};

export const Tag = (props: TagProps) => {
  return (
    <span
      className={'border-2 px-2 py-1 rounded-full lowercase ' + props.className}
      style={{
        color: tagColors[props.name],
        fontWeight: 600,
      }}
    >
      {props.name}
    </span>
  );
};
