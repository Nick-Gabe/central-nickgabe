import { Dispatch, SetStateAction } from "react";

export type SearchProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export type SearchButtonsProps = {
  onClearSearch: () => void;
  value: string;
}