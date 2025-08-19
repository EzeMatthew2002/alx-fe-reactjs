import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error , setError] = useState('')

  const [userNameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  if(!username || !password || !email){
    setError('Please enter your details')
  }
  function handleUserName(e) {
    const value = e.target.value.trimStart();
    setUserName(value);

    if (value === "") {
      setUserNameError("Please enter a name");
    } else {
      setUserNameError("");
    }
  }

  function handleEmail(e) {
    const value = e.target.value.trim();
    setEmail(value);

    if (!value.includes("@")) {
      setEmailError("Please enter a correct email");
    } else {
      setEmailError("");
    }
  }

  function handlePassword(e) {
    const value = e.target.value.trim();
    setPassword(value);

    if (value === "") {
      setPasswordError("Please enter a password");
    } else {
      setPasswordError("");
    }
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUserName}
          />
          {userNameError && <p style={{ color: "red" }}>{userNameError}</p>}
        </div>

        <div>
          <label htmlFor="email">Enter your email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
          />
          {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        </div>

        <div>
          <label htmlFor="password">Enter your password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
