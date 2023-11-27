import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../features/posts/postsSlice";
import { toast } from "react-toastify";
import { usersSelector } from "../features/users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState(0);

  const canSave = [title.trim(), content.trim(), author].every(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(title, content, author));
    toast.success("Post added successfully!");
    setTitle("");
    setContent("");
    setAuthor(0);
  };

  const renderUsersSelect = users.map((user) => (
    <option key={user.id} id={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <form
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mb-4"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-4">Add New Post</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-md px-3 py-2"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border rounded-md px-3 py-2"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="author" className="block text-gray-700 font-bold mb-2">
          Author
        </label>
        <select
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full border rounded-md px-3 py-2"
          required
        >
          <option id="" value="">
            Select an author
          </option>
          {renderUsersSelect}
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:hover:cursor-not-allowed disabled:hover:bg-blue-500"
        disabled={!canSave}
      >
        Add Post
      </button>
    </form>
  );
};

export default AddPostForm;
