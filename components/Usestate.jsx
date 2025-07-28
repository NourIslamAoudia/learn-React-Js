import { useState } from "react";

const Usestate = () => {
  // user={
  //   name: "Aoudia Nour Islam",
  //   age: 20,
  //   email: "aoudia@example.com"
  // }
  const [user, setUser] = useState({
    name: "Aoudia Nour Islam",
    age: 20,
    email: "aoudia@example.com",
  });
  return (
    <>
      <div>name: {user.name}</div>
      <div>age: {user.age}</div>
      <div>email: {user.email}</div>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Increment Age
      </button>
      <button onClick={() => setUser({ ...user, age: user.age - 1 })}>
        Decrement Age
      </button>
      <button onClick={() => setUser({ ...user, age: 0 })}>Reset Age</button>
    </>
  );
};

export default Usestate;
