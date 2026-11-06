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


  function handleCheckBox(){
    setTodos(prev => prev.map(p => (p.id === todo.id ? {...p, completed: !p.completed} : p))
  )
  }

  return (
    <li className={styles.todoListItem}>
      {/* <p>{todo.id}</p> */}
      <div className="flex items-center gap-5">
        <label className="relative flex items-center gap-2 cursor-pointer">
          <input 
          type="checkbox" 
          className={styles.checkCircleInput}
          checked={todo.completed}
          onChange={handleCheckBox}
           />
          <CheckIcon className={styles.checkIcon} />
        </label>
        <p>{todo.text}</p>
      </div>
      <div className="flex items-center gap-5">
        <PencilSquareIcon className="size-7" />
        <TrashIcon className="size-7" />
      </div>
      {/* {todo.completed ? <p>Done</p> : <p>Not Completed</p> } */}
    </li>
  );
}
