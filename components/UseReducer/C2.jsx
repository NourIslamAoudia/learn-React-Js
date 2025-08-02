//// UseReducer/C.jsx

import { useCountContext } from "../../context/CountContext.jsx";
import styles from "../Button.module.css";

const C2 = () => {
  const { dispatch } = useCountContext();
  return (
    <>
      <button
        className={styles.button}
        onClick={() => dispatch({ type: "increment", value: 1 })}
      >
        Increment
      </button>
      <button
        className={styles.button}
        onClick={() => dispatch({ type: "decrement", value: 1 })}
      >
        Decrement
      </button>
      <button
        className={styles.button}
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </>
  );
};

export default C2;
