import quotes from './quotes.js';

const quoteElementQuote = document.getElementById('quote');
const quoteElementAuthor = document.getElementById('author');
const generateBtn = document.getElementById('generate-btn');
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteIndex;

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  const { quote, author } = randomQuote;
  quoteElementQuote.textContent = quote;
  quoteElementAuthor.textContent = author;

  toggleFavoriteBtn.textContent = randomQuote.isFavorite
    ? 'Remove from favorite'
    : 'Add to favorite';

  toggleFavoriteBtn.style.display = 'inline-block';
}

function toggleFavorite() {
  if (currentQuoteIndex !== undefined) {
    const currentQuote = quotes[currentQuoteIndex];
    currentQuote.isFavorite = !currentQuote.isFavorite;
    toggleFavoriteBtn.textContent = currentQuote.isFavorite
      ? 'Remove to favorite'
      : 'Add to favorite';

    if (currentQuote.isFavorite) {
      const favoritesCard = document.createElement('div');
      favoritesCard.classList.add('favorite-card');
      favoritesCard.innerHTML = `<p>"${currentQuote.quote}"</p>
  <p class="author">${currentQuote.author}</p>`;
      favoritesContainer.appendChild(favoritesCard);
    } else {
      const favoritesCards = document.querySelectorAll('.favorite-card');
      favoritesCards.forEach((card) => {
        if (card.textContent.includes(currentQuote.quote)) {
          card.remove();
        }
      });
    }
  }
}

generateBtn.addEventListener('click', generateRandomQuote);
toggleFavoriteBtn.addEventListener('click', toggleFavorite);
