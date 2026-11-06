import { useTodos } from "../context/TodoContext"
import { styles } from "../styles/styles";
import { filterTodos, clearCompleted } from "../utils/todoUtils";
import TodoItem from "./TodoItem";


export default function TodoList() {
    const { todos, filter, dispatch } = useTodos();
    const filteredTodos = filterTodos(todos, filter);
    const incompleteTodosNum = filterTodos(todos, "active").length;
    const completeTodosNum = filterTodos(todos, "completed").length;
    return (
        <>
            <ul className="w-lg flex flex-col gap-2">
                {filteredTodos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo}/>
                ))}

                <li className={`${styles.todoListItem} flex justify-between`}>
                    <p>{incompleteTodosNum} items left</p>
                
                    <button className="text-blue-600 no-underline hover:underline" type="button" onClick={() => clearCompleted(dispatch)}>
                        Clear Completed ({completeTodosNum})
                    </button>
                </li>
            </ul>

            <div>
                <p></p>
            </div>


        </>
    )

}