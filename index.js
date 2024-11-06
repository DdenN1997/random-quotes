import quotes from './src/quotes.js';
import {
  createFavoriteBtn,
  showFavoriteCard,
  hideFavoriteCard,
} from './src/favoritesHandler.js';
import { generateRandomInt } from './src/utils/math.js';

const quoteElementQuote = document.getElementById('quote');
const quoteElementAuthor = document.getElementById('author');
const generateBtn = document.getElementById('generate-btn');
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteIndex;

function generateRandomQuote() {
  const randomIndex = generateRandomInt(quotes.length);
  const { quote, author, isFavorite } = quotes[randomIndex];
  currentQuoteIndex = randomIndex;
  quoteElementQuote.textContent = quote;
  quoteElementAuthor.textContent = author;

  createFavoriteBtn(isFavorite, toggleFavoriteBtn);

  toggleFavoriteBtn.style.display = 'inline-block';
}

function toggleFavorite() {
  if (currentQuoteIndex !== undefined) {
    const currentQuote = quotes[currentQuoteIndex];
    currentQuote.isFavorite = !currentQuote.isFavorite;

    createFavoriteBtn(currentQuote.isFavorite, toggleFavoriteBtn);

    if (currentQuote.isFavorite) {
      showFavoriteCard(
        currentQuote.quote,
        currentQuote.author,
        favoritesContainer
      );
    } else {
      hideFavoriteCard(currentQuote.quote);
    }
  }
}

generateBtn.addEventListener('click', generateRandomQuote);
toggleFavoriteBtn.addEventListener('click', toggleFavorite);
