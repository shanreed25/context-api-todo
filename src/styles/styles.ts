export const styles = {
  app: "min-h-screen flex flex-col gap-20 items-center bg-fuchsia-100 text-neutral-900 dark:bg-[#0C0618] dark:text-white",
  header: "w-full border-b shadow-md border-fuchsia-300 bg-white dark:border-neutral-700 dark:bg-neutral-900",
  headerContentConatiner: "flex items-center justify-between px-6 py-4",
  headerH1: "text-5xl font-bold text-fuchsia-900 dark:text-white",
  modeBtn: "flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-neutral-900 font-semibold px-4 py-2 rounded-lg shadow transition-colors",
  todoListItem: "flex justify-between items-center gap-4 rounded-lg px-4 py-3 shadow-md transition-colors border bg-white border-fuchsia-200 hover:bg-fuchsia-50 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:bg-neutral-700",
  todoInput: "flex-1 rounded-md px-4 py-2 border focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white border-fuchsia-300 text-neutral-900 placeholder-neutral-400 dark:bg-neutral-800 dark:border-neutral-600 dark:text-white dark:placeholder-neutral-500",
  addTodoBtn: "bg-blue-600 hover:bg-blue-500 text-white font-medium px-5 py-2 rounded-md transition-colors",
  checkCircleInput: "peer appearance-none h-5 w-5 rounded-full border-2 border-gray-400 checked:bg-purple-700 checked:border-purple-700 cursor-pointer",
  checkIcon: "absolute left-1 h-3 w-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none",
  filterBtns: "rounded border cursor-pointer py-2 px-4",
  inactiveFilterBtn: "bg-white border-fuchsia-300 text-neutral-900 hover:bg-fuchsia-50 dark:bg-neutral-700 dark:border-neutral-600 dark:text-white dark:hover:bg-neutral-600",
  activeFilterBtn: "font-bold border-blue-600 bg-blue-600 text-white",
};

