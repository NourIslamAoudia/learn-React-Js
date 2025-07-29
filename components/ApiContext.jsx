
import { dataContext } from "../src/App";

const ApiContext = () => {

  return (
    <>
      <h1>API Context</h1>
      <dataContext.Consumer>
        {({ data }) => {
          return <h1>{data.join(", ")}</h1>;
        }}
      </dataContext.Consumer>
    </>
  );
};

export default ApiContext;
