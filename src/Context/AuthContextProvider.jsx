import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // When this was only set to null, on every refresh, the user was initially set to null and this
  // direct the user to login page. Even though in 1 sec later user seem logged in. Leaving it as an empty
  // object fixed the issue.

  console.log(user);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
