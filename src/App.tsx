import { useReducer, useState } from "react";
import { mockTodos } from "./data/mockTodos";
import { todoReducer } from "./context/todoReducer";
import { styles } from "./styles/styles"
import { TodoContext } from "./context/TodoContext";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList"
import TodoFilter from "./components/TodoFilter";
import type { Theme, Filter } from "./types/todo";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [todos, dispatch] = useReducer(todoReducer, mockTodos);
  const [filter, setFilter] = useState<Filter>("all")
  const [theme, setTheme] = useState<Theme>("dark")

  function toggleTheme(){
    setTheme(prev => ((prev) === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className={`${theme === "dark" ? "dark" : ""} ${styles.app}`}>
      <header className={styles.header}>
        <div className={styles.headerContentConatiner}>
          <h1 className={styles.headerH1}>Todo App (Context API)</h1>
          <button className={styles.modeBtn} onClick={toggleTheme}>{theme === "dark" ? "🌞 Switch to Light" : "🌙 Switch to Dark"}</button>
        </div>
      </header>
      <TodoContext.Provider value={{todos, dispatch, filter, setFilter}}>
        <TodoInput />
        <TodoFilter />
        <TodoList />

      </TodoContext.Provider>

    </div>
    </ThemeContext.Provider>
  )
}

export default App
