export function loadLocalStorage<Data>(key: string, fallback: Data): Data {
  try {
    const saved = localStorage.getItem(key);
    return saved !== null ? (JSON.parse(saved) as Data) : fallback;
  } catch {
    return fallback;
  }
}

export function saveToLocalStorage<Data>(key: string, value: Data): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    console.log("Storage full or blocked");
  }
}