import { useEffect } from "react";

type ContentProps = {
  search: string;
}

export const Content = (props: ContentProps) => {

  useEffect(() => {
  }, [props.search])

  return <div className="">{props.search}</div>
}