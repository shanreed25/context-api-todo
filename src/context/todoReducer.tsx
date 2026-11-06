import type { Todo, TodoReducerAction,  } from "../types/todo";

export function todoReducer(todos: Todo[], action: TodoReducerAction): Todo[] {
    switch (action.type) {
        case "toggle":
            return todos.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
        case "addTodo":
            return [...todos, {id: crypto.randomUUID(), text: action.text, completed: false}]
        case "delete":
            return todos.filter(todo => todo.id !== action.id)
        case "edit":
            return todos.map(todo => todo.id === action.id ? {...todo, text: action.text} : todo)
        default:
            return todos
    }
}