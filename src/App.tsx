import { useState } from "react";
import { mockTodos } from "./data/mockTodos";
import type { Todo } from "./types/todo";
import { styles } from "./styles/styles"
import { TodoContext } from "./context/TodoContext";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList"
import TodoFilter from "./components/TodoFilter";




function App() {
  const [todos, setTodos] = useState<Todo[]>(mockTodos)


  return (
    <div className={styles.app}>
     
      <header className={styles.header}>
        <div className={styles.headerContentConatiner}>
          <h1 className={styles.headerH1}>Todo App (Context API)</h1>
          <button className={styles.modeBtn}>🌞 Switch to Light</button>
        </div>
      </header>
      <TodoContext.Provider value={{todos, setTodos}}>
        <TodoInput />
        <TodoFilter />
        <TodoList />

      </TodoContext.Provider>

    </div>
  )
}

export default App
