import { useState } from "react";
import TodoList from "./components/TodoList"
import { mockTodos } from "./data/mockTodos";
import type { Todo } from "./types/todo";

import { styles } from "./styles/styles"
import { TodoContext } from "./context/TodoContext";
import TodoInput from "./components/TodoInput";




function App() {
  const [todos, setTodos] = useState<Todo[]>(mockTodos)


  return (
    <div className={styles.app}>
     
      <header>
        <h1 className="text-5xl">Todo App (Context API)</h1>
      </header>
      <TodoContext.Provider value={{todos, setTodos}}>
        <TodoInput />
        <TodoList />

      </TodoContext.Provider>

    </div>
  )
}

export default App
