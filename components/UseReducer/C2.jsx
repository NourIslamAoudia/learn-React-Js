//// UseReducer/C.jsx

import { useCountContext } from "../../context/CountContext.jsx";
import styles from "../Button.module.css";

const C2 = () => {
  const { dispatch } = useCountContext();
  return (
    <>
      <button
        className={styles.button}
        onClick={() => dispatch({ type: "increment", value: 2 })}
      >
        Increment +2
      </button>
      <button
        className={styles.button}
        onClick={() => dispatch({ type: "decrement", value: 2 })}
      >
        Decrement -2
      </button>
      <button
        className={styles.button}
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset to 0
      </button>
    </>
  );
};

export default C2;
