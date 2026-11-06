import { useState } from "react";
import { useTodos } from "../context/TodoContext";
import { styles } from "../styles/styles";
import type { TodoItemProps } from "../types/todo";
import {
  PencilSquareIcon,
  TrashIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";
import { editTodo, saveNewText, cancelEdit } from "../utils/todoUtils";
import { XMarkIcon } from "@heroicons/react/24/solid";


export default function TodoItem({ todo }: TodoItemProps) {
  const { dispatch } = useTodos()
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [newText, setNewText] = useState<string>(todo.text)

  return (
    <li className={styles.todoListItem}>
      <div className="flex items-center gap-5">
        <label className="relative flex items-center gap-2 cursor-pointer">
          <input 
          type="checkbox" 
          className={styles.checkCircleInput}
          checked={todo.completed}
          onChange={() => dispatch({ type: "toggle", id: todo.id })}
           />
          <CheckIcon className={styles.checkIcon} />
        </label>

        {isEditing ? (
          <input 
          value={newText} 
          onChange={e => setNewText(e.target.value)}
          className={styles.todoInput}
          autoFocus
           /> )
           :
           ( <p>{todo.text}</p>
        )}
      </div>


      <div className="flex items-center gap-5">
        {isEditing ? (
          <>
          <button type="button" onClick={() => saveNewText(todo, newText, dispatch, setIsEditing)} aria-label="Save edit">
              <CheckIcon className="size-7 text-green-600" />
            </button>
            <button type="button" onClick={() => cancelEdit(todo.text, setNewText, setIsEditing)} aria-label="Cancel edit">
              <XMarkIcon className="size-7 text-red-600" />
            </button>
          </>
        ) : (
       <button type="button" onClick={() =>editTodo(todo.text, setNewText, setIsEditing)}> 
        <PencilSquareIcon className="size-7 text-blue-600" />
        </button>
        )}



        <button type="button" onClick={() => dispatch({type: "delete", id: todo.id})}>
          <TrashIcon className="size-7 text-red-500" />
        </button>
      </div>
    </li>
  );
}
