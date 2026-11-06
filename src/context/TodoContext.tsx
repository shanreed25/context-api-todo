import { createContext } from "react";
import type { TodoContextValue } from "../types/todo";




//create the context object
//<TodoContextValue | undefined>: value is either the real shared data or undefined
//undefined is the default, means reading this context outside the Provider is a mistake
// the defaule is only used if the component calls useContext with No matching Provider above it
export const TodoContext = createContext<TodoContextValue | undefined>(undefined);