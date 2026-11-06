import type { Dispatch, SetStateAction } from "react";

export interface Todo {
    id: string;
    text: string;
    completed: boolean
}

export type TodoContextValue = {
    todos: Todo[];
    setTodos: Dispatch<SetStateAction<Todo[]>>;
} 

export interface TodoItemProps{
    todo: Todo;
}

export interface TodoListProps{
    todos: Todo[]
}

