import { useReducer } from "react";
import style from "./Button.module.css"; // Assuming you have a CSS file for styling

const initialState = 0;

const reduce = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
};

const UseReduce = () => {
  //dispatch function to update the state
  //reducer function to manage the state
  //initialState to set the initial value of the state
  const [state, dispatch] = useReducer(reduce, initialState);
  return (
    <>
      <h1>UseReducer Example</h1>
      <h1>Count: {state}</h1>
      <button
        className={style.button}
        type="button"
        onClick={() => dispatch({ type: "increment" })}
      >
        Increment
      </button>
      <button
        className={style.button}
        type="button"
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrement
      </button>
      <button
        className={style.button}
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </>
  );
};

export default UseReduce;
