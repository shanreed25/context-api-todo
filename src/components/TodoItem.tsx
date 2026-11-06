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
        <p>{todo.text}</p>
      </div>
      <div className="flex items-center gap-5">
        <PencilSquareIcon className="size-7" />
        <button type="button" onClick={() => dispatch({type: "delete", id: todo.id})}>
          <TrashIcon className="size-7" />
        </button>
      </div>
    </li>
  );
}
