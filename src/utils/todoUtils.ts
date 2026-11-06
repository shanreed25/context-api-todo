import type { Dispatch, SetStateAction } from "react";
import type { Todo, TodoReducerAction } from "../types/todo";

type SetText = Dispatch<SetStateAction<string>>;
type SetEditing = Dispatch<SetStateAction<boolean>>;

export function editTodo(
  text: string,
  setNewText: SetText,
  setIsEditing: SetEditing,
) {
  setNewText(text);
  setIsEditing(true);
}

export function saveNewText(
  todo: Todo,
  newText: string,
  dispatch: Dispatch<TodoReducerAction>,
  setIsEditing: SetEditing,
) {
  const trimmed = newText.trim();
  if (trimmed === "") return;

  dispatch({ type: "edit", id: todo.id, text: trimmed });
  setIsEditing(false);
}

export function cancelEdit(
  text: string,
  setNewText: SetText,
  setIsEditing: SetEditing,
) {
  setNewText(text);
  setIsEditing(false);
}
