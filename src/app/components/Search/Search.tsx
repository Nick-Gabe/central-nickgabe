import debounce from "lodash.debounce";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import styles from "./search.module.css";
import { SearchProps } from "./SearchTypes";
import { SearchButtons } from "./SearchButtons";
import MagnifierIcon from "@public/icons/magnifier.svg"

export const Search = (props: SearchProps) => {
  const [value, setValue] = useState(props.search);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(debounce((nextValue) => props.setSearch(nextValue), 1000), []);

  useEffect(() => {
    debouncedSearch(value)
  }, [value, debouncedSearch, props])

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);

    if(props.search === newValue) return props.setLoading(false);
    props.setLoading(true);
  }

  const clearSearch = () => {
    props.setLoading(true);
    props.setSearch("");
    setValue("");
  };

  return(
    <div className={styles.container}>
      <MagnifierIcon className={styles.magnifier} />
      <input
        className={styles.input}
        placeholder="Pesquise um tema"
        value={value} 
        onChange={onChange}
      />
      <SearchButtons onClearSearch={clearSearch} value={value} />
    </div>
  )
}