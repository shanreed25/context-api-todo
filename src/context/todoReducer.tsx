import type { Todo, TodoReducerAction,  } from "../types/todo";

export function todoReducer(todos: Todo[], action: TodoReducerAction): Todo[] {
    switch (action.type) {
        case "toggleTodo":
            return todos.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
        case "addTodo":
            return [...todos, {id: crypto.randomUUID(), text: action.text, completed: false}]
        case "deleteTodo":
            return todos.filter(todo => todo.id !== action.id)
        case "editTodo":
            return todos.map(todo => todo.id === action.id ? {...todo, text: action.text} : todo)
        case "clearCompleted":
            return todos.filter(todo => !todo.completed)
        default:
            return todos
    }
}