export const useLocalStorage = () => {
  const original = { ...localStorage }

  return {
    get<T = any>(key: string): T | null {
      const item = window.localStorage.getItem(key)
      if (item) {
        return JSON.parse(item)
      }
      return null
    },
    set(key: string, value: any) {
      window.localStorage.setItem(key, JSON.stringify(value))
      return this
    },
    remove(key: string) {
      window.localStorage.removeItem(key)
      return this
    },
    clear() {
      window.localStorage.clear()
    },
    original
  }
}