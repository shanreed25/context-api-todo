import type { Todo, TodoReducerAction,  } from "../types/todo";

export function todoReducer(todos: Todo[], action: TodoReducerAction): Todo[] {
    switch (action.type) {
        case "toggle":
            return todos.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
        default:
            return todos
    }





    return todos
}