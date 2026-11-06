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
    // //useState<Todo[]> hands back Dispatch<SetStateAction<Todo[]>>
    // //Dispatch<...>, a function that takes something and returns nothing
    // //Dispatch and SetStateAction come from React's type definitions
    // //setTodos takes state (SetStateAction<Todo[]>)
    // setTodos: Dispatch<SetStateAction<Todo[]>>;

//with useReducer, the context holds a different function
//useReducer(todoReducer, ...) hands bac a action object, like { type: "toggle", id: "..." }
//Dispatch<...>, a function that takes something and returns nothing
//dispatch takes action (TodoReducerAction)
    dispatch: Dispatch<TodoReducerAction>;
} 

export interface TodoItemProps{
    todo: Todo;
}

export interface TodoListProps{
    todos: Todo[]
}


export type TodoReducerAction = { type: "toggle"; id: string };