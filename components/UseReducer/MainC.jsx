//// UseReducer/MainC.jsx
import { useCountContext } from "../../context/CountContext.jsx";
import C1 from "./C1.jsx";
import C2 from "./C2.jsx";
import C3 from "./C3.jsx";
const MainC = () => {
  const { state } = useCountContext();
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>UseReducer Example</h1>
      <div style={{ fontWeight: "bold" }}>Count: {state}</div>
      <div>
        <C1 />
      </div>
      <div>
        <C2 />
      </div>
      <div>
        <C3 />
      </div>
    </div>
  );
};

export default MainC;
