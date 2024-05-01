import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const test = "Work";

  const userInfo = { test };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
