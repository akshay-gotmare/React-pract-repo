import React, { useContext, useState } from "react";
import { ThemeContext } from "./App";

export default function CounterHooks(props) {
  const [count, setCount] = useState(props.initialCount);
  const style = useContext(ThemeContext);

  const changeCount = (amount) => {
    setCount((prevCount) => prevCount + amount);
  };
  return (
    <div>
      {/* <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button> */}
      <button style={style} onClick={() => changeCount(-1)}>
        -
      </button>
      <span>{count}</span>
      <button style={style} onClick={() => changeCount(1)}>
        +
      </button>

      {/* <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button> */}
    </div>
  );
}
