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

function localStorageSetArray(key, quote) {
  let array = [];
  try {
    array = JSON.parse(localStorage.getItem(key)) || [];
  } catch (e) {
    console.error('Ошибка при чтении из localStorage:', e);
  }

  if (!array.find((fav) => fav.id === quote.id)) {
    array.push(quote);
    try {
      localStorage.setItem(key, JSON.stringify(array));
    } catch (e) {
      console.error('Ошибка при записи в localStorage:', e);
    }
  }
}

function removeQuoteFromLocalStorage(id, key) {
  let array = JSON.parse(localStorage.getItem(key)) || [];
  array = array.filter((quote) => quote.id !== id);
  localStorage.setItem(key, JSON.stringify(array));
}

function localStorageGetItem(key) {
  const value = localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

function localStorageRemove(key) {
  localStorage.removeItem(key);
}

function clearLocalStorage() {
  localStorage.clear();
}

export {
  localStorageSetItem,
  localStorageGetItem,
  localStorageRemove,
  clearLocalStorage,
  localStorageSetArray,
  removeQuoteFromLocalStorage,
};
