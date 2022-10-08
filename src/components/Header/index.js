import styles from "./index.module.css";
import { ReactComponent as OpenIssueIcon } from "../../assets/status/open.svg";
import { ReactComponent as CloseIssueIcon } from "../../assets/status/close.svg";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.openIssue}>
        <OpenIssueIcon />
        <h6 className={styles.heading}>808 Open</h6>
        <CloseIssueIcon />
        <h6 className={styles.closeIssue}>10908 Closed</h6>
      </div>
    </div>
  );
}
export default Header;
