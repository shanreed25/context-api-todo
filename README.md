# React Context API Todo App

> A Todo app in React where all shared state lives in three separate contexts:
- TodoContext, which ic saved to localStorage and restored when the app loads, owns the list of todos and the actions that change it
- FilterContext owns which todos are visible
- ThemeContext, which is saved to localStorage and restored when the app loads, owns light or dark mode


### TodoContext

> **State: An array of todo items. Each todo item should have at least:**

- **id:** A unique identifier (string or number).
- **text:** The content of the todo (string).
- **completed:** A boolean indicating if the todo is completed.

> **Actions (exposed via context):**

- **addTodo(text: string):** Adds a new todo item to the list.
- **toggleTodo(id: string | number):** Toggles the completed status of a todo item.
- **deleteTodo(id: string | number):** Removes a todo item from the list.
- **editTodo(id: string | number, newText: string):** Edits the text of an existing todo item.
- **clearCompleted():** Removes all completed todos.

> **Components:**

- **TodoInput:** An input field to add new todos.
- **TodoList:** Displays the list of todo items.
- **TodoItem:** Represents a single todo item, allowing interaction (toggle, delete, edit).