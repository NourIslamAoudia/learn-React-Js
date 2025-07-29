import { useContext } from "react";
import { dataContext } from "../src/App";

const ApiContext = () => {
  const data = useContext(dataContext);

  return (
    <>
      <h1>API Context</h1>
      <ul>
        {data.data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ApiContext;
