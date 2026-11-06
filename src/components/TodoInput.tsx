


export default function TodoInput(){


    return (
        <form>
            <label htmlFor="new-todo">New Todo</label>
            <input id="new-todo" type="text" placeholder="What needs to be done?"/>
            <button type="submit">Add Todo</button>
        </form>
    )
}