import { useState } from "react";

const Usestate = () => {
  const [userInfo, setUser] = useState({
    email: "",
    password: "",
    isLoggedIn: false,
  });
  return (
    <>
      <label>
        Email:
        <input
          type="email"
          value={userInfo.email}
          onChange={(e) => setUser({ ...userInfo, email: e.target.value })} //e.target.value: to get the value of the input field
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={userInfo.password}
          onChange={(e) => setUser({ ...userInfo, password: e.target.value })} //e.target.value: to get the value of the input field
        />
      </label>
      <div>email: {userInfo.email}</div>
      <div>password: {userInfo.password}</div>
      <div>isLoggedIn: {userInfo.isLoggedIn ? "Yes" : "No"}</div>
      <button onClick={() => setUser({ ...userInfo, isLoggedIn: true })}>
        Log In
      </button>
      <button onClick={() => setUser({ ...userInfo, isLoggedIn: false })}>
        Log Out
      </button>
      <button onClick={() => setUser({ ...userInfo, email: "", password: "" })}>
        Reset
      </button>
    </>
  );
};

export default Usestate;
