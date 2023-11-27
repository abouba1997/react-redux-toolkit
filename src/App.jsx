import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddPostForm from "./components/AddPost";
import Counter from "./components/Counter";
import PostsList from "./components/PostsList";

export default function App() {
  return (
    <div className="grid justify-center w-full relative">
      <div className="fixed right-5 bottom-0">
        <h1 className="text-base font-bold text-center mb-2">Counter</h1>
        <Counter />
      </div>
      <div className="mt-2">
        <h1 className="text-center font-semibold italic mb-2">
          BLOG POST EXAMPLE WITH REACT-REDUX
        </h1>
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
