import { useTodos } from "../context/TodoContext"
import { filterTodos } from "../utils/todoUtils";
import TodoItem from "./TodoItem";


export default function TodoList() {
    const { todos, filter } = useTodos();
    const filteredTodos = filterTodos(todos, filter);
    return (
        <ul className="w-lg flex flex-col gap-2">
            {filteredTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </ul>
    )

}