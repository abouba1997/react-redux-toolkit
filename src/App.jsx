import Counter from "./components/Counter";

export default function App() {
  return (
    <div className="grid justify-center w-full relative">
      <div className="absolute right-0">
        <h1 className="text-xl font-bold text-center mb-4">Counter</h1>
        <Counter />
      </div>
    </div>
  );
}
