import { quoteFavoriteBtn } from '../../index.js';
import {
  localStorageSetItem,
  localStorageFavoritesArray,
  removeQuoteFromLocalStorage,
} from '../utils/localStorage.js';

function toggleFavorite(quote, setCurrentQuote, btn, container) {
  quote.isFavorite = !quote.isFavorite;
  setCurrentQuote(quote);
  toggleFavoriteBtnIcon(quote.isFavorite);

  if (quote.isFavorite) {
    showFavoriteCard(quote, container);
  } else {
    hideFavoriteCard(quote.id);
  }
  // localStorageSetItem('currentQuote', quote);
}

function handleFavorite(isFavorite) {
  showFavoriteBtn(quoteFavoriteBtn);
  toggleFavoriteBtnIcon(isFavorite, quoteFavoriteBtn);
}

function toggleFavoriteBtnIcon(isFavorite) {
  quoteFavoriteBtn.innerHTML = isFavorite
    ? '<i class="fas fa-heart fa-2xl"></i>'
    : '<i class="far fa-heart fa-2xl"></i>';
}

function showFavoriteBtn(btn) {
  btn.style.display = 'inline-block';
}

function hideFavoriteBtn(btn) {
  btn.style.display = 'none';
}

function removeFavoriteCard(quote) {
  quote.isFavorite = !quote.isFavorite;
  hideFavoriteCard(quote.id);
  const currentQuote = document.getElementById('quote');
  const currentQuoteId = currentQuote.dataset.currentQuoteId;
  if (currentQuoteId === quote.id) {
    toggleFavoriteBtnIcon(quote.isFavorite);
  }
  removeQuoteFromLocalStorage(quote.id);
  localStorageSetItem('currentQuote', quote);
}

function showFavoriteCard(quote, container) {
  const { id, text, author } = quote;
  const favoritesCard = document.createElement('div');
  favoritesCard.classList.add('favorite-card');
  // Add ID in Favorite quote card
  favoritesCard.dataset.favoriteQuoteId = id;
  favoritesCard.innerHTML = `<p class="quote-text">"${text}"</p>
  <p class="quote-author">${author}</p>
  <i class="fas fa-solid fa-xmark fa-xl close-btn"></i>`;
  container.appendChild(favoritesCard);
  localStorageFavoritesArray(quote);

  const closeBtn = favoritesCard.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => removeFavoriteCard(quote));
}

function hideFavoriteCard(id) {
  const card = document.querySelector(`[data-favorite-quote-id="${id}"]`);
  if (card) {
    card.remove();
  }
  removeQuoteFromLocalStorage(id);

  // card && card.remove();
}

export {
  toggleFavoriteBtnIcon,
  showFavoriteCard,
  hideFavoriteCard,
  showFavoriteBtn,
  hideFavoriteBtn,
  handleFavorite,
  toggleFavorite,
};
