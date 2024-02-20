import React, { createContext, useContext } from "react";

const authContext = createContext();
export const useAuth = () => useContext(authContext);
export default function AuthContextProvider({ children }) {
  const values = {};
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
}