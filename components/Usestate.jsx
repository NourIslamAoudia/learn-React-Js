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
          value={userInfo.email} //controlled input
          onChange={(e) => setUser({ ...userInfo, email: e.target.value })}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={userInfo.password} //controlled input
          onChange={(e) => setUser({ ...userInfo, password: e.target.value })}
        />
      </label>
      <div>email: {userInfo.email}</div>
      <div>password: {userInfo.password}</div>
      <div>isLoggedIn: {userInfo.isLoggedIn ? "Yes" : "No"}</div>
      <button
        onClick={(e) =>
          setUser({
            email: userInfo.email,
            password: userInfo.password,
            isLoggedIn: true,
          })
        }
      >
        Log In
      </button>
      <button
        onClick={() => setUser({ email: "", password: "", isLoggedIn: false })}
      >
        Log Out
      </button>
      <span>userInfo: {JSON.stringify(userInfo)}</span>
    </>
  );
};

export default Usestate;
