import debounce from "lodash.debounce";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
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

    if (props.search === newValue) return props.setLoading(false);
    props.setLoading(true);
  }

  const clearSearch = () => {
    props.setLoading(true);
    props.setSearch("");
    setValue("");
  };

  return (
    <div className='relative flex items-center bg-white rounded-full h-10 w-[90vw] border-2 box-content mb-20 sm:max-w-[80vw] md:max-w-[450px]'>
      <MagnifierIcon className='absolute left-3' />
      <input
        className='bg-transparent h-full w-full rounded-full pl-12 pr-[4.5rem] placeholder:italic '
        placeholder="Pesquise um tema"
        value={value}
        onChange={onChange}
      />
      <SearchButtons onClearSearch={clearSearch} value={value} />
    </div>
  )
}
