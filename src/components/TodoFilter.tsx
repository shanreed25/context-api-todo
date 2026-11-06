import { useTodos } from "../context/TodoContext";
import { styles } from "../styles/styles";
import type { Filter } from "../types/todo"


const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
]

export default function TodoFilter(){
  const {filter, setFilter} = useTodos()

    return (
        <div className="flex justify-center gap-3">
      {FILTERS.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => setFilter(value)}
          className={`${styles.filterBtns} ${filter === value ? styles.activeFilterBtn : styles.inactiveFilterBtn}`}
        >
          {label}
        </button>
      ))}
    </div>
    )
}