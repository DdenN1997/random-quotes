import { handleFavorite } from './favorites.js';
import { generateRandomInt } from '../utils/math.js';

function handleQuote(quotes, setCurrentQuote) {
  const randomQuote = choseRandomQuote(quotes);
  setCurrentQuote(randomQuote);
  displayQuote(randomQuote);
}

function displayQuote(quote) {
  const { id, text, author, isFavorite } = quote;
  const quoteElement = document.getElementById('quote');
  const quoteElementText = document.getElementById('quote-text');
  const quoteElementAuthor = document.getElementById('quote-author');
  quoteElement.style.height = '8em';
  quoteElementText.style.minHeight = '60px';
  // Add ID in Current quote
  quoteElement.dataset.currentQuoteId = id;
  quoteElementText.textContent = text;
  quoteElementAuthor.textContent = author;
  handleFavorite(isFavorite);
}

function choseRandomQuote(quotes) {
  const randomIndex = generateRandomInt(quotes.length);
  return quotes[randomIndex];
}

export { handleQuote, displayQuote };
