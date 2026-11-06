import { useReducer, useState } from "react";
import { mockTodos } from "./data/mockTodos";
import { todoReducer } from "./context/todoReducer";
import { styles } from "./styles/styles"
import { TodoContext } from "./context/TodoContext";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList"
import TodoFilter from "./components/TodoFilter";
import type { Filter } from "./types/todo";

function App() {
  const [todos, dispatch] = useReducer(todoReducer, mockTodos);
  const [filter, setFilter] = useState<Filter>("all")

  return (
    <div className={styles.app}>
     
      <header className={styles.header}>
        <div className={styles.headerContentConatiner}>
          <h1 className={styles.headerH1}>Todo App (Context API)</h1>
          <button className={styles.modeBtn}>🌞 Switch to Light</button>
        </div>
      </header>
      <TodoContext.Provider value={{todos, dispatch, filter, setFilter}}>
        <TodoInput />
        <TodoFilter />
        <TodoList />

      </TodoContext.Provider>

    </div>
  )
}

export default App
