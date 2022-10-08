import ReactTooltip from "react-tooltip";
import Tag from "../Tag";
import styles from "./index.module.css";
import { getRandomColor, timeSince } from "../../utils/common";
import IssueIcon from "../IssueIcon";

function IssuesList({ issue }) {
  let { title, labels, comments, number, user, created_at, state } = issue;
  let createdAt = new Date(created_at);
  let randomPicker = getRandomColor();
  return (
    <div className={styles.issueWrapper} key={`${number}`}>
      <ReactTooltip />
      <div className={styles.openIssueList}>
        <div className={styles.iscon} data-tip={`${state} issue`}>
          <IssueIcon type={state} />
        </div>
        <div className={styles.detail}>
          <a className={styles.heading} href="">
            {title}
          </a>
          <span>
            {labels &&
              labels.map((label, ind) => {
                return (
                  <Tag
                    textColor={randomPicker.textColor}
                    bgColor={randomPicker.bgColor}
                    text={label.name}
                    description={label.description}
                  />
                );
              })}
          </span>
          <div className={styles.openBy}>
            #{number} opened {timeSince(new Date(createdAt))} by{" "}
            <a className={styles.user}>{user?.login}</a>
          </div>
        </div>
      </div>
      {comments ? (
        <a className={styles.comment}>
          <IssueIcon type="comment" /> {comments}
        </a>
      ) : null}
    </div>
  );
}
export default IssuesList;
