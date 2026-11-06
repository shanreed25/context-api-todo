import { createContext, useContext } from "react";
import type { ThemeContextValue } from "../types/todo";


export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);



//custom hook
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used in ThemeContext.Provider");
  }

  return context;
}