import { Dispatch, SetStateAction } from "react";

export type ContentProps = {
  search: string;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}