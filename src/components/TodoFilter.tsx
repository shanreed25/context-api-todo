import { useTodos } from "../context/TodoContext";
import type { Filter } from "../types/todo"


const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
]

export default function TodoFilter(){
  const {setFilter} = useTodos()

    return (
        <div>
      {FILTERS.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => setFilter(value)}
        >
          {label}
        </button>
      ))}
    </div>
    )
}