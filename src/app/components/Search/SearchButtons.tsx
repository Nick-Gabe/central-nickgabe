import styles from "./search.module.css";
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
    <div className={styles.sideButtons}>
      <Tooltip
        title="Copia o link da pesquisa"
        placement="bottom"
        trigger={["focus", "hover"]}
      >
        <button className={styles.linkButton} onClick={copyLink}>
          <LinkIcon />
        </button>
      </Tooltip>
      <Tooltip
        title="Limpa a pesquisa atual"
        placement="bottom"
        trigger={["focus", "hover"]}
      >
        <button className={styles.clearButton} onClick={props.onClearSearch}>
          <CloseIcon />
        </button>
      </Tooltip>
    </div>
  )
}