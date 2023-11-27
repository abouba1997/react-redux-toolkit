import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
} from "../features/counter/counterSlice";
import { counterSelector } from "../features/counter/counterSlice";

const Counter = () => {
  const counter = useSelector(counterSelector);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(1);

  const handleInputChange = (e) => {
    const value = Number(e.target.value) || 0;
    setInputValue(value);
  };

  const resetAll = () => {
    setInputValue(0);
    dispatch(reset());
  };

  return (
    <div className="text-sm flex flex-col items-center">
      <div className="flex flex-row mb-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-l"
          onClick={() => dispatch(decrement())}
        >
          - (1)
        </button>
        <p className="mx-auto border-y py-1 px-2">{counter.count}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-r"
          onClick={() => dispatch(increment())}
        >
          + (1)
        </button>
      </div>
      <p>By amount value</p>
      <div className="my-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-l"
          onClick={() => dispatch(decrementByAmount(inputValue))}
        >
          - (by)
        </button>
        <input
          className="border text-center w-16 h-[1.75rem]"
          type="number"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-r"
          onClick={() => dispatch(incrementByAmount(inputValue))}
        >
          + (by)
        </button>
      </div>
      <div>
        <button
          className="px-2 py-1 bg-slate-300 hover:bg-slate-400 rounded-sm mb-4"
          onClick={resetAll}
        >
          Reset all
        </button>
      </div>
    </div>
  );
};

export default Counter;
