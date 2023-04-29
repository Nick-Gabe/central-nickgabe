import debounce from "lodash.debounce";
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";

type SearchProps = {
  setSearch: Dispatch<SetStateAction<string>>;
}

export const Search = (props: SearchProps) => {
  const [value, setValue] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(debounce((nextValue) => props.setSearch(nextValue), 1000), []);

  useEffect(() => {
    debouncedSearch(value)
  }, [value, debouncedSearch])

  return <input className="text-black" placeholder='search' value={value} onChange={e => setValue(e.target.value)}/> 
}