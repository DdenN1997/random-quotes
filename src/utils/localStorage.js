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

function localStorageFavoritesArray(quote) {
  let favorites = JSON.parse(localStorage.getItem('favoriteQuotes')) || [];
  if (!favorites.find((fav) => fav.id === quote.id)) {
    favorites.push(quote);
    localStorage.setItem('favoriteQuotes', JSON.stringify(favorites));
  }
}

function removeQuoteFromLocalStorage(id) {
  let favorites = JSON.parse(localStorage.getItem('favoriteQuotes')) || [];
  favorites = favorites.filter((quote) => quote.id !== id);
  localStorage.setItem('favoriteQuotes', JSON.stringify(favorites));
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
  localStorageFavoritesArray,
  removeQuoteFromLocalStorage,
};
