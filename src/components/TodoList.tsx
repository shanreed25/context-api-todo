import { useTodos } from "../context/TodoContext"
import TodoItem from "./TodoItem";


export default function TodoList() {
    const { todos } = useTodos();
    
    return (
        <ul className="w-lg flex flex-col gap-2">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </ul>
    )

}