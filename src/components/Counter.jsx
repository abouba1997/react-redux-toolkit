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
    <div className="flex flex-col items-center">
      <div className="flex flex-row mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
          onClick={() => dispatch(decrement())}
        >
          - (1)
        </button>
        <p className="mx-auto border-y py-2 px-4">{counter.count}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
          onClick={() => dispatch(increment())}
        >
          + (1)
        </button>
      </div>
      <p>By amount</p>
      <div className="my-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
          onClick={() => dispatch(decrementByAmount(inputValue))}
        >
          - (by amount)
        </button>
        <input
          className="border text-center w-16 h-[2.5rem]"
          type="number"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
          onClick={() => dispatch(incrementByAmount(inputValue))}
        >
          + (by amount)
        </button>
      </div>
      <div>
        <button
          className="px-4 py-2 bg-slate-300 hover:bg-slate-400 rounded-sm"
          onClick={resetAll}
        >
          Reset all
        </button>
      </div>
    </div>
  );
};

export default Counter;
