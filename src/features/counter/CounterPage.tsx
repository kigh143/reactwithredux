import React from "react";
import { Helmet } from "react-helmet";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Maintainer from "../../components/Maintainer";
import { incremented, decremented } from "./counterSlice";

const CounterPage: React.FC = () => {
  const count = useAppSelector((state) => state.persistedReducer.counter.value);
  const dispatch = useAppDispatch();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Counter Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        <h2>{count}</h2>
        <button onClick={() => dispatch(incremented())}>Add 1</button>
        <button onClick={() => dispatch(decremented())}>remove 1</button>
        <Maintainer />
      </div>
    </>
  );
};

export default CounterPage;
