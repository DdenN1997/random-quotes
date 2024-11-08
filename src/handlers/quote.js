import { handleFavorite } from './favorites.js';
import { generateRandomInt } from '../utils/math.js';

function handleQuote(quotes, setCurrentQuote) {
  const randomQuote = choseRandomQuote(quotes);
  setCurrentQuote(randomQuote);
  displayQuote(randomQuote);
}

function displayQuote(quote) {
  const { text, author, isFavorite } = quote;
  const quoteElementQuote = document.getElementById('quote');
  const quoteElementAuthor = document.getElementById('author');
  quoteElementQuote.textContent = text;
  quoteElementAuthor.textContent = author;
  handleFavorite(isFavorite);
}

function choseRandomQuote(quotes) {
  const randomIndex = generateRandomInt(quotes.length);
  return quotes[randomIndex];
}

export { handleQuote };
