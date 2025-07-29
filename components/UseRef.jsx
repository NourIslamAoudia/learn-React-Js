import { useRef, useEffect } from "react";

const MyComponent = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // Fait le focus automatiquement après le render
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default MyComponent;
