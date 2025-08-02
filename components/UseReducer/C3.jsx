import { useCountContext } from "../../context/CountContext.jsx";
import styles from "../Button.module.css";

const C3 = () => {
  const { dispatch } = useCountContext();
  return (
    <>
      <button
        className={styles.button}
        onClick={() => dispatch({ type: "increment", value: 3 })}
      >
        Increment +3
      </button>
      <button
        className={styles.button}
        onClick={() => dispatch({ type: "decrement", value: 3 })}
      >
        Decrement -3
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

export default C3;
