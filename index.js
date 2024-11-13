import quotes from './src/data/quotes.js';
import { handleQuote } from './src/handlers/quote.js';
import { toggleFavorite, hideFavoriteBtn } from './src/handlers/favorites.js';

let currentQuote = null;

function setCurrentQuote(quote) {
  currentQuote = quote;
}

const favoritesContainer = document.getElementById('favorites-container');

const quoteFavoriteBtn = document.getElementById('favorite-btn');
hideFavoriteBtn(quoteFavoriteBtn);
quoteFavoriteBtn.addEventListener('click', () =>
  toggleFavorite({
    quote: currentQuote,
    btn: quoteFavoriteBtn,
    container: favoritesContainer,
  })
);

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', () =>
  handleQuote(quotes, setCurrentQuote)
);

export { quoteFavoriteBtn };
