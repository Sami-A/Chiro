export const LOCAL_STORAGE = {
  settings: "SETTINGS",
};

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key) => {
  const value = localStorage.getItem(key);
  if (!value) return null;

  const jsonParse = JSON.parse(value);
  return jsonParse ? jsonParse : null;
};

export const removeItem = (key) => {
  localStorage.removeItem(key);
};

export const clear = () => {
  localStorage.clear();
};
