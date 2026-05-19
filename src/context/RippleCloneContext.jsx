/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";

const RippleCloneContext = createContext(false);

export function RippleCloneProvider({ children }) {
  return <RippleCloneContext.Provider value={true}>{children}</RippleCloneContext.Provider>;
}

export function useRippleClone() {
  return useContext(RippleCloneContext);
}
