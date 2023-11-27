import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddPostForm from "./components/AddPost";
import Counter from "./components/Counter";
import PostsList from "./components/PostsList";

export default function App() {
  return (
    <div className="grid justify-center w-full relative">
      <div className="absolute right-0">
        <h1 className="text-xl font-bold text-center mb-4">Counter</h1>
        <Counter />
      </div>
      <div className="absolute left-6 top-2">
        <AddPostForm />
        <PostsList />
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
