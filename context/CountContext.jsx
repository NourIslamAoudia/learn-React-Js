// context/CountContext.jsx
import { createContext, useContext, useReducer } from "react";

const CountsContext = createContext({});
const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CountContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // This component is a placeholder for the context provider
    <CountsContext.Provider value={{ state, dispatch }}>
      {children}
    </CountsContext.Provider>
  );
};

export default CountContextProvider;

export const useCountContext = () => {
  const context = useContext(CountsContext);
  if (!context) {
    throw new Error(
      "useCountContext must be used within a CountContextProvider"
    );
  }
  return context;
};
