import quotes from './quotes.js';

const quoteElementQuote = document.getElementById('quote');
const quoteElementAuthor = document.getElementById('author');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const { quote, author } = randomQuote;
  quoteElementQuote.textContent = quote;
  quoteElementAuthor.textContent = author;
}

generateBtn.addEventListener('click', generateRandomQuote);
