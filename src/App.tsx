import React from "react";
import { useAppDispatch, useAppSelector } from "./app/hook";
import { incremented, decremented } from "./features/counter/counterSlice";
import "./App.css";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={() => dispatch(incremented())}>Add 1</button>
      <button onClick={() => dispatch(decremented())}>remove 1</button>
    </div>
  );
}

export default App;
