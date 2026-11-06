import { styles } from "../styles/styles";



export default function TodoInput(){
    return (
        <form className="w-full max-w-xl mx-auto flex gap-2 py-4">
            <label htmlFor="new-todo"></label>
            <input id="new-todo" type="text" placeholder="What needs to be done?" className={styles.todoInput}/>
            <button type="submit" className={styles.addTodoBtn}>Add Todo</button>
        </form>
    )
}