import { favoriteBtn } from '../../index.js';

function toggleFavorite(quote, btn, container) {
  quote.isFavorite = !quote.isFavorite;
  const { text, author, isFavorite } = quote;
  toggleFavoriteBtnIcon(isFavorite, btn);

  if (isFavorite) {
    showFavoriteCard(text, author, container);
  } else {
    hideFavoriteCard(text);
  }
}

function handleFavorite(isFavorite) {
  showFavoriteBtn(favoriteBtn);
  toggleFavoriteBtnIcon(isFavorite, favoriteBtn);
}

function toggleFavoriteBtnIcon(isFavorite, button) {
  button.innerHTML = isFavorite
    ? '<i class="fas fa-heart fa-2xl"></i>'
    : '<i class="far fa-heart fa-2xl"></i>';
}

function showFavoriteBtn(btn) {
  btn.style.display = 'inline-block';
}

function hideFavoriteBtn(btn) {
  btn.style.display = 'none';
}

function showFavoriteCard(text, author, container) {
  const favoritesCard = document.createElement('div');
  favoritesCard.classList.add('favorite-card');
  favoritesCard.innerHTML = `<p>"${text}"</p>
      <p class="author">${author}</p>`;
  container.appendChild(favoritesCard);
}

function hideFavoriteCard(text) {
  const favoritesCards = document.querySelectorAll('.favorite-card');
  favoritesCards.forEach((card) => {
    if (card.textContent.includes(text)) {
      card.remove();
    }
  });
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
