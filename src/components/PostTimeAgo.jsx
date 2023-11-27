import PropTypes from "prop-types";
import { parseISO, formatDistanceToNow } from "date-fns";

const PostTimeAgo = ({ timestamp }) => {
  let timeAgo = "";

  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};

PostTimeAgo.propTypes = {
  timestamp: PropTypes.string,
};

export default PostTimeAgo;
