import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { incremented, decremented } from "./counterSlice";

const CounterPage: React.FC = () => {
  const count = useAppSelector((state) => state.persistedReducer.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(incremented())}>Add 1</button>
      <button onClick={() => dispatch(decremented())}>remove 1</button>
    </div>
  );
};

export default CounterPage;
