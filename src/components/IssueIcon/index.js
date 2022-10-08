import { ReactComponent as OpenIssueIcon } from "../../assets/status/open.svg";
import { ReactComponent as CloseIssueIcon } from "../../assets/status/close-issue.svg";
import { ReactComponent as CommentIcon } from "../../assets/others/comment.svg";
import { ReactComponent as OpenIssueIconGreen } from "../../assets/status/open-green.svg";
function IssueIcon({ type }) {
  let icon = OpenIssueIcon;
  switch (type) {
    case "comment":
      icon = <CommentIcon />;
      break;
    case "open":
      icon = <OpenIssueIconGreen />;
      break;
    case "close":
      icon = <CloseIssueIcon />;
      break;
  }
  return icon;
}
export default IssueIcon;
