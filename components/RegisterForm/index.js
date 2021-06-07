import React, { useState } from "react";
export const RegisterForm = () => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  // -------------------------------------------*
  const emailHandler = (e) => {
    let email = e.target.value;
    setEmail(email);
  };
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
    console.log(`Email: ${email} | Username: ${username} | Password: ${password}`);
    
  };
  // -------------------------------------------*
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input onChange={emailHandler} type="text" placeholder="Email" />
        <input onChange={usernameHandler} type="text" placeholder="Username" />
        <input
          onChange={passwordHandler}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
