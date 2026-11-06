import { createContext, useContext } from "react";
import type { TodoContextValue } from "../types/todo";

//create the context object
//<TodoContextValue | undefined>: value is either the real shared data or undefined
//undefined is the default, means reading this context outside the Provider is a mistake
// the defaule is only used if the component calls useContext with No matching Provider above it
export const TodoContext = createContext<TodoContextValue | undefined>(undefined);


// this custom hook reads the context and makes sure it is not empty
export function useTodos(): TodoContextValue {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error("useTodos must be used inside TodoContext.Provider");
  }

  return context; // TypeScript now knows this is TodoContextType, not undefined
}