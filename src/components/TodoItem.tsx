import type { TodoItemProps } from "../types/todo";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";


export default function TodoItem({todo}: TodoItemProps){


    return (
        <li className="flex justify-between">
            {/* <p>{todo.id}</p> */}
            <div>
                <p>{todo.text}</p>
            </div>
            <div className="w-20 flex justify-between border">
                <PencilSquareIcon className="size-7" />
                <TrashIcon className="size-7" />
            </div>
            {/* {todo.completed ? <p>Done</p> : <p>Not Completed</p> } */}
        </li>
    )
}