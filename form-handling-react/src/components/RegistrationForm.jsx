import React, { useState } from "react";

const RegistrationForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!userName) {
      newErrors.userName = "Please enter a name";
    }
    if (!email) {
      newErrors.email = "Please enter an email";
    } else if (!email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }
    if (!passWord) {
      newErrors.passWord = "Please enter a password";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", { userName, email, passWord });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            name="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          {errors.userName && <p style={{ color: "red" }}>{errors.userName}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Enter your email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password">Enter your password</label>
          <input
            type="password"
            name="password"
            value={passWord}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.passWord && <p style={{ color: "red" }}>{errors.passWord}</p>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
