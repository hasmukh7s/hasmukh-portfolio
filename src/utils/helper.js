
export const getLocalStorageItem = (key) => localStorage.getItem(key);
export const setLocalStorageItem = (key, value) =>
  localStorage.setItem(key, value);
export const removeLocalStorageItem = (key) => localStorage.removeItem(key);

export const url =
  process.env.REACT_APP_API_ENDPOINT || "https://jsonplaceholder.typicode.com/";

