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

### Current status
> The app uses the Context API to share task state across components, a custom useTodos hook to read that state safely, and checkboxes to mark tasks complete