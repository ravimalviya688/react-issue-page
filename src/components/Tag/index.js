import ReactTooltip from "react-tooltip";
import styles from "./index.module.css";
function Tag({ textColor, bgColor, text, description }) {
  return (
    <>
      <a
        style={{ color: textColor, background: bgColor }}
        class={styles.tag}
        data-tip={description}
        onMouseLeave={() => ReactTooltip.rebuild()}
      >
        {text}
      </a>
    </>
  );
}
export default Tag;
