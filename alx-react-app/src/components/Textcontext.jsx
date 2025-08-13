import React, { createContext } from "react";
const Login = createContext();

const Textcontext = () => {
  return (
    <Login.Provider value={true}>
      <div>

      </div>
    </Login.Provider>
  );
};

export default Textcontext;
