import React, { useState } from "react";
import { login } from "../../lib/auth";
export const LoginForm = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  // -------------------------------------------*
  const usernameHandler = (e) => {
    let name = e.target.value;
    setUsername(name);
  };
  const passwordHandler = (e) => {
    let pass = e.target.value;
    setPassword(pass);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(`Username: ${username} | Password: ${password}`);
    const data = await login(username, password);
    console.log(data.payload);
  };
  // -------------------------------------------*
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input onChange={usernameHandler} type="text" placeholder="Username" />
        <input onChange={passwordHandler} type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
