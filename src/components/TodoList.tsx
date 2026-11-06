import type { TodoListProps } from "../types/todo";

import TodoItem from "./TodoItem";

export default function TodoList() {

    return (
        <ul className="w-lg border">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </ul>
    )

}