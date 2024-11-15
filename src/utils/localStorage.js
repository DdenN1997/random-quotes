function localStorageSetItem(key, value) {
  if (typeof key !== 'string') {
    console.error('Error: key !== string');
    return;
  }
  try {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error('Error setting item in localStorage:', error);
  }
}

function localStorageGetItem(key) {
  const value = localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

function localStorageClear(key) {
  localStorage.removeItem(key);
}

function clearLocalStorage() {
  localStorage.clear();
}

export {
  localStorageSetItem,
  localStorageGetItem,
  localStorageClear,
  clearLocalStorage,
};
