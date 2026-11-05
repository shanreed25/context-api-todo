import { mockTodos } from "../data/mockTodos";

import TodoItem from "./TodoItem";

export default function TodoList() {

    return (
        <ul className="w-lg border">
            {mockTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </ul>
    )

}