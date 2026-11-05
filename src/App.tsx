import TodoList from "./components/TodoList"


import { styles } from "./styles/styles"



function App() {


  return (
    <div className={styles.app}>
     
      <header>
        <h1 className="text-5xl">Todo App (Context API)</h1>
      </header>
      <TodoList/>
    </div>
  )
}

export default App
