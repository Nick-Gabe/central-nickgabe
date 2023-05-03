import { Dispatch, SetStateAction } from "react";

export type SearchProps = {
  setSearch: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}