import type { Dispatch, SetStateAction } from "react";

//describes one todo item
export interface Todo {
    id: string;
    text: string;
    completed: boolean
}

//describes what goes in the context
export type TodoContextValue = {
    todos: Todo[];
    //useState<Todo[]> hands back Dispatch<SetStateAction<Todo[]>>
    //Dispatch and SetStateAction come from React's type definitions
    setTodos: Dispatch<SetStateAction<Todo[]>>;
} 

export interface TodoItemProps{
    todo: Todo;
}

export interface TodoListProps{
    todos: Todo[]
}


export type TodoAction = { type: "toggle"; id: string };