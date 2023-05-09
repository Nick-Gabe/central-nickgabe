import { SearchButtonsProps } from "./SearchTypes";
import { message, Tooltip } from "antd";
import LinkIcon from "@public/icons/link.svg"
import CloseIcon from "@public/icons/close.svg"

export const SearchButtons = (props: SearchButtonsProps) => {
  const copyLink = () => {
    const params = new URLSearchParams({
      search: props.value
    });
    const link = `${window.origin}?${params.toString()}`;
    navigator.clipboard.writeText(link);
    message.success("Link copiado para a área de transferência!")
  }

  return (
    <div className='absolute flex items-center gap-2 right-3'>
      <Tooltip
        title="Copia o link da pesquisa"
        placement="bottom"
        trigger={["focus", "hover"]}
      >
        <button className={`focus:text-primary hover:text-primary ${!props.value && 'hidden'} `} data-test-id="copy-link" onClick={copyLink}>
          <LinkIcon />
        </button>
      </Tooltip>
      <Tooltip
        title="Limpa a pesquisa atual"
        placement="bottom"
        trigger={["focus", "hover"]}
      >
        <button className={`focus:text-primary hover:text-primary ${!props.value && 'hidden'}`} onClick={props.onClearSearch}>
          <CloseIcon />
        </button>
      </Tooltip>
    </div>
  )
}
