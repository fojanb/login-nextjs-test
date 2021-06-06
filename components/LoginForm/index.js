import React, { useState } from "react";
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
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`Username: ${username} | Password: ${password}`);
  };
  // -------------------------------------------*
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input onChange={usernameHandler} type="text" placeholder="Username" />
        <input
          onChange={passwordHandler}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
