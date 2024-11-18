import { handleFavorite } from './favorites.js';
import { generateRandomInt } from '../utils/math.js';
import { localStorageSetArray } from '../utils/localStorage.js';

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
  quoteElementText.textContent = `"${text}"`;
  quoteElementAuthor.textContent = author;
  handleFavorite(isFavorite);
}

function choseRandomQuote(quotes) {
  let arrayCurrentQuotes =
    JSON.parse(localStorage.getItem('arrayCurrentQuotes')) || [];

  if (arrayCurrentQuotes.length >= quotes.length) {
    arrayCurrentQuotes = [];
    localStorage.setItem(
      'arrayCurrentQuotes',
      JSON.stringify(arrayCurrentQuotes)
    );
  }

  let randomIndex;
  let isUnique = false;

  while (!isUnique) {
    randomIndex = generateRandomInt(quotes.length);
    isUnique = !arrayCurrentQuotes.some(
      (quote) => quote.id === quotes[randomIndex].id
    );
  }

  localStorageSetArray('arrayCurrentQuotes', quotes[randomIndex]);

  return quotes[randomIndex];
}

export { handleQuote, displayQuote };
