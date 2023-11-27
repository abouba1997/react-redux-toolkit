import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addReaction } from "../features/posts/postsSlice";

const reactions = {
  like: "👍",
  love: "❤️",
  haha: "😂",
  wow: "😯",
  sad: "😢",
  angry: "😡",
};

const PostReactions = ({ post }) => {
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactions).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="mx-2"
        onClick={() =>
          dispatch(addReaction({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <div>{reactionButtons}</div>;
};

PostReactions.propTypes = {
  post: PropTypes.object,
};

export default PostReactions;
