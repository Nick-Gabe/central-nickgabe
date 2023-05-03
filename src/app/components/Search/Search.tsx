import debounce from "lodash.debounce";
import Image from "next/image";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import styles from "./search.module.css";
import { SearchProps } from "./SearchTypes";

export const Search = (props: SearchProps) => {
  const [value, setValue] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(debounce((nextValue) => props.setSearch(nextValue), 1000), []);

  useEffect(() => {
    debouncedSearch(value)
  }, [value, debouncedSearch])

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.setLoading(true);
    setValue(event.target.value)
  }

  const clearSearch = () => {
    props.setLoading(true);
    setValue("");
    props.setSearch("");
  };

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
        onChange={onChange}
      />
      <button className={styles.clearButton} onClick={clearSearch}>
        <Image
          src="/icons/close.svg"
          alt="Limpar pesquisa"
          width={20}
          height={20}
        />
      </button>
    </div>
  )
}