import PropTypes from "prop-types";
import { usersSelector } from "../features/users/usersSlice";
import { useSelector } from "react-redux";

const PostAuthor = ({ userId }) => {
  const users = useSelector(usersSelector);

  const author = users.find((user) => user.id === userId);

  return <p>Author: {author ? author.name : "Anonymous"}</p>;
};

PostAuthor.propTypes = {
  userId: PropTypes.string,
};

export default PostAuthor;
