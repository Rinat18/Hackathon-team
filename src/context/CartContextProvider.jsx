import React, { createContext, useContext } from "react";

const cartContext = createContext();
export const useCart = () => useContext(cartContext);

export default function CartContextProvider({ children }) {
  const values = {};
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
}
