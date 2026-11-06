import { useTodos } from "../context/TodoContext"
import TodoItem from "./TodoItem";


export default function TodoList() {
    const { todos } = useTodos();
    
    return (
        <ul className="w-lg border">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </ul>
    )

}