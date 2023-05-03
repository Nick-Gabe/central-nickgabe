import debounce from "lodash.debounce";
import Image from "next/image";
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import styles from "./search.module.css";

type SearchProps = {
  setSearch: Dispatch<SetStateAction<string>>;
}

export const Search = (props: SearchProps) => {
  const [value, setValue] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(debounce((nextValue) => props.setSearch(nextValue), 500), []);

  useEffect(() => {
    debouncedSearch(value)
  }, [value, debouncedSearch])

  return(
    <div className={styles.container}>
      <Image
        className={styles.magnifier}
        src={"/icons/magnifier.svg"}
        alt=""
        width={50}
        height={50}
      />
      <input
        className={styles.input}
        placeholder="Pesquise um tema"
        value={value} 
        onChange={e => setValue(e.target.value)}
      />
    </div>
  )
}