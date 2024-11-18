import quotes from './src/data/quotes.js';
import { displayQuote, handleQuote } from './src/handlers/quote.js';
import {
  toggleFavorite,
  hideFavoriteBtn,
  showFavoriteCard,
} from './src/handlers/favorites.js';
import {
  localStorageSetItem,
  localStorageSetArray,
} from './src/utils/localStorage.js';

let currentQuote = JSON.parse(localStorage.getItem('currentQuote')) || {};

function setCurrentQuote(quote) {
  currentQuote = quote;
  localStorageSetItem('currentQuote', quote);
}

window.addEventListener('load', () => {
  const loadCurrentQuote = JSON.parse(localStorage.getItem('currentQuote'));
  const loadFavoriteQuotes = JSON.parse(localStorage.getItem('favoriteQuotes'));
  displayQuote(loadCurrentQuote);
  loadFavoriteQuotes.forEach((quote) => {
    showFavoriteCard(quote, favoritesContainer);
  });
});

const favoritesContainer = document.getElementById('favorites-container');

const quoteFavoriteBtn = document.getElementById('favorite-btn');
hideFavoriteBtn(quoteFavoriteBtn);
quoteFavoriteBtn.addEventListener('click', () =>
  toggleFavorite(
    currentQuote,
    setCurrentQuote,
    favoritesContainer,
    'favoriteQuotes'
  )
);

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', () =>
  handleQuote(quotes, setCurrentQuote)
);

export { quoteFavoriteBtn };
