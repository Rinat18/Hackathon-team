import React, { createContext, useContext } from "react";

const productContext = createContext();
export const UseProduct = () => useContext(productContext);
export default function ProductContextProvider({ children }) {
  const values = {};
  return <productContext.Provider>{children}</productContext.Provider>;
}
