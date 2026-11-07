# React Context API Todo App


> All shared state lives in three separate contexts:
- TodoContext, which ic saved to localStorage and restored when the app loads, owns the list of todos and the actions that change it
- FilterContext owns which todos are visible
- ThemeContext, which is saved to localStorage and restored when the app loads, owns light or dark mode


| File                | Purpose                                                                      | TypeScript feature used                                                                           |
|---------------------|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| `todo.ts`           | Shapes of the data                                                           | `interface Todo`, `type TodoContextValue`, union `TodoReducerAction`, `type Filter`, `type Theme` |
| `TodoContext.tsx`   | The todo context and a safe hook                                             | `createContext<TodoContextValue \| undefined>`, `useTodos()`                                      |
| `ThemeContext.tsx`  | The theme context and a safe hook                                            | `createContext<ThemeContextValue \| undefined>`, `useTheme()`                                     |
| `App.tsx`           | Owns todos, filter, and theme state, wraps the app in both Providers         | `useReducer(todoReducer, ...)`, `useState<Filter>`, `useState<Theme>`                             |
| `TodoList.tsx`      | Shows the filtered todos, items left, and Clear Completed                    | Inferred `Todo` inside `.map`                                                                     |
| `TodoItem.tsx`      | Shows one todo with toggle, edit, and delete                                 | `type TodoItemProps`, `useState<boolean>`, `useState<string>`                                     |
| `styles.ts`         | To cut down on style code in the components                                  | Styles objects                                                                                    |
| `mockTodos.ts`      | The starting list of todos                                                   | Array literal checked against `Todo[]` by `useReducer`                                            |
| `todoReducer.tsx`   | Handles toggle, add, delete, edit, and clear completed actions               | `(todos: Todo[], action: TodoReducerAction): Todo[]`                                              |
| `todoUtils.ts`      | Helpers for editing, filtering, and clearing completed todos                 | `Dispatch<SetStateAction<string>>`, `Filter` parameter                                            |
| `storage.ts`        | Saves and loads todos and theme in localStorage                              | Generic functions `loadLocalStorage<Data>`, `saveToLocalStorage<Data>`                            |
| `TodoInput.tsx`     | Form that dispatches `addTodo` with the typed text                           | `useState<string>`, `ChangeEvent`, `SubmitEvent`                                                  |
| `TodoFilter.tsx`    | Buttons to switch between all, active, and completed                         | `type Filter`, `{ value: Filter; label: string }[]`                                               |

## Status
### Core Todo Management (TodoContext)
- [X] **State:** An array of todo items. Each todo item should have at least:
    - [X] **`id:`** A unique identifier (string or number).
    - [X] **`text:`** The content of the todo (string).
    - [X] **`completed:`** A boolean indicating if the todo is completed.
- [X] **Actions (exposed via context):**
    - [X] **`addTodo(text: string):`** Adds a new todo item to the list.
    - [X] **`toggleTodo(id: string | number):`** Toggles the completed status of a todo item.
    - [X] **`deleteTodo(id: string | number):`** Removes a todo item from the list.
    - [X] **`editTodo(id: string | number, newText: string):`** Edits the text of an existing todo item.
    - [X] **`clearCompleted():`** Removes all completed todos.
- [X] **Components:**
    - [X] **`TodoInput:`** An input field to add new todos.
    - [X] **`TodoList:`** Displays the list of todo items.
    - [X] **`TodoItem:`** Represents a single todo item, allowing interaction (toggle, delete, edit).
### Visibility Filters (FilterContext)
- [X] **State:** The current visibility filter. Possible values: ‘all’, ‘active’, ‘completed’.
- [X] **Actions** (exposed via context):
    - [X] **`setFilter(filter: string):`** Sets the current filter.
- [X] **Functionality:**
    - [X] The TodoList should display todos based on the currently active filter from FilterContext.
    - [X] FilterButtons: A component that displays buttons to change the current filter.


### Theme Switching (ThemeContext)
- [X] **State:** The current theme. Possible values: ‘light’, ‘dark’.
- [X] **Actions (exposed via context):**
    - [X] **`toggleTheme():`** Switches between ‘light’ and ‘dark’ themes.
- [X] **Functionality:**
    - [X] The application should visually change based on the selected theme (e.g., background colors, text colors). Apply theme changes to the main app container and ideally a few key components.
    - [X] ThemeToggleButton: A button to toggle the theme.

### Persistence Layer
- **Functionality:**
    - [X] The state of the todos (from TodoContext) and the current theme (from ThemeContext) should be persisted to localStorage.
    - [X] When the application loads, it should attempt to rehydrate these states from localStorage.
    - [X] Updates to todos or theme should automatically update localStorage.