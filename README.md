# React Context API Todo App


> All shared state lives in three separate contexts:
- TodoContext, which ic saved to localStorage and restored when the app loads, owns the list of todos and the actions that change it
- FilterContext owns which todos are visible
- ThemeContext, which is saved to localStorage and restored when the app loads, owns light or dark mode


| File                | Purpose                                              | TypeScript feature used                                          |
|---------------------|------------------------------------------------------|------------------------------------------------------------------|
| `types.ts`          | Shapes of the data                                   | `type Todo`, `type TodoContextType`                              |
| `TodoContext.ts`    | The context box and a safe hook                      | `createContext<TodoContextType \| undefined>`, `useTodos()`      |
| `App.tsx`           | Owns the state, wraps the app in the Provider        | `useState<Todo[]>`                                               |
| `TodoList.tsx`      | Reads `todos` and maps them                          | Inferred `Todo` inside `.map`                                    |
| `TodoItem.tsx`      | Shows one todo with a checkbox                       | `type TodoItemProps`                                             |
| `styles.ts`         | To cut down on style code in the components          | Styles objects                                                   |
| `mockTodos.ts`      | The starting list of todos                           | Array literal checked against `Todo[]` by `useReducer`           |
| `todoReducer.tsx`   | Handles toggle, add, delete, and edit actions        | `(todos: Todo[], action: TodoReducerAction): Todo[]`             |
| `todoUtils.ts`      | Helpers for editing todos and filtering the list     | `Dispatch<SetStateAction<string>>`, `Filter` parameter           |
| `TodoInput.tsx`     | Form that dispatches `addTodo` with the typed text   | `useState<string>`, `ChangeEvent`, `SubmitEvent`                 |
| `TodoFilter.tsx`    | Buttons to switch between all, active, and completed | `type Filter`, `{ value: Filter; label: string }[]`              |

## Status
### Core Todo Management (TodoContext)
- [ ] **State:** An array of todo items. Each todo item should have at least:
    - [X] **`id:`** A unique identifier (string or number).
    - [X] **`text:`** The content of the todo (string).
    - [X] **`completed:`** A boolean indicating if the todo is completed.
- [ ] **Actions (exposed via context):**
    - [X] **`addTodo(text: string):`** Adds a new todo item to the list.
    - [X] **`toggleTodo(id: string | number):`** Toggles the completed status of a todo item.
    - [X] **`deleteTodo(id: string | number):`** Removes a todo item from the list.
    - [X] **`editTodo(id: string | number, newText: string):`** Edits the text of an existing todo item.
    - [ ] **`clearCompleted():`** Removes all completed todos.
- [X] **Components:**
    - [X] **`TodoInput:`** An input field to add new todos.
    - [X] **`TodoList:`** Displays the list of todo items.
    - [X] **`TodoItem:`** Represents a single todo item, allowing interaction (toggle, delete, edit).
### Visibility Filters (FilterContext)
- [X] **State:** The current visibility filter. Possible values: ‘all’, ‘active’, ‘completed’.
- [X] **Actions** (exposed via context):
    - [ ] **`setFilter(filter: string):`** Sets the current filter.
- [X] **Functionality:**
    - [X] The TodoList should display todos based on the currently active filter from FilterContext.
    - [X] FilterButtons: A component that displays buttons to change the current filter.