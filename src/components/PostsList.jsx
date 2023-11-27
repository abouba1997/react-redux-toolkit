import { useSelector } from "react-redux";
import { postsSelector } from "../features/posts/postsSlice";
import PostAuthor from "./PostAuthor";
import PostTimeAgo from "./PostTimeAgo";
import PostReactions from "./PostReactions";

const PostsList = () => {
  const posts = useSelector(postsSelector);

  const filteredPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderPosts = filteredPosts.map((post) => {
    return (
      <article key={post.id} className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
        <p className="text-gray-700 mb-4">{post.content.substring(0, 50)}...</p>
        <div className="flex items-center justify-between text-gray-500 text-xs italic">
          <PostAuthor userId={post.userId} />
          <PostTimeAgo timestamp={post.date} />
        </div>
        <PostReactions post={post} />
      </article>
    );
  });

  return (
    <div className="flex flex-col max-w-screen-md mx-auto">{renderPosts}</div>
  );
};

export default PostsList;
