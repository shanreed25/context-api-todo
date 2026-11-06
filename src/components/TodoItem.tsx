import { useTodos } from "../context/TodoContext";
import { styles } from "../styles/styles";
import type { TodoItemProps } from "../types/todo";
import {
  PencilSquareIcon,
  TrashIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";

export default function TodoItem({ todo }: TodoItemProps) {
  const { setTodos } = useTodos();


  return (
    <li className="flex justify-between">
      {/* <p>{todo.id}</p> */}
      <div className="flex">
        <label className="relative flex items-center gap-2 cursor-pointer">
          <input 
          type="checkbox" 
          className={styles.checkCircleInput}
           />
          <CheckIcon className={styles.checkIcon} />
        </label>
        <p>{todo.text}</p>
      </div>
      <div className="w-20 flex justify-between">
        <PencilSquareIcon className="size-7" />
        <TrashIcon className="size-7" />
      </div>
      {/* {todo.completed ? <p>Done</p> : <p>Not Completed</p> } */}
    </li>
  );
}
