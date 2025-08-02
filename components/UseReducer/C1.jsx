// UseReducer/C1.jsx
import { useCountContext } from "../../context/CountContext.jsx";
import styles from "../Button.module.css";

const C1 = () => {
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

export default C1;
