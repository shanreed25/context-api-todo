import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { styles } from "../styles/styles";
import { useTodos } from "../context/TodoContext";

export default function TodoInput() {
    const [inputText, setInputText] = useState<string>("")
    const {dispatch} = useTodos()


    function handleChange(e: ChangeEvent<HTMLInputElement>){
        setInputText(e.target.value)
    }

    function handleSubmit(e: SubmitEvent<HTMLFormElement>){
        e.preventDefault()

        if (inputText.trim() === ""){
          return
        }
        dispatch({type: "addTodo", text: inputText.trim() })
        setInputText("")
    }
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto flex gap-2 py-4">
      <label htmlFor="new-todo"></label>
      <input
        id="new-todo"
        type="text"
        placeholder="What needs to be done?"
        className={styles.todoInput}
        value={inputText}
        onChange={handleChange}
      />
      <button type="submit" className={styles.addTodoBtn}>
        Add Todo
      </button>
    </form>
  );
}
