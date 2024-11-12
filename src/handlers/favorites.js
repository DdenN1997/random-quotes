import { favoriteBtn } from '../../index.js';

function toggleFavorite({ quote, btn, container }) {
  quote.isFavorite = !quote.isFavorite;
  toggleFavoriteBtnIcon(quote.isFavorite);

  if (quote.isFavorite) {
    showFavoriteCard(quote, container);
  } else {
    hideFavoriteCard(quote.id);
  }
}

function handleFavorite(isFavorite) {
  showFavoriteBtn(favoriteBtn);
  toggleFavoriteBtnIcon(isFavorite, favoriteBtn);
}

function toggleFavoriteBtnIcon(isFavorite) {
  favoriteBtn.innerHTML = isFavorite
    ? '<i class="fas fa-heart fa-2xl"></i>'
    : '<i class="far fa-heart fa-2xl"></i>';
}

function showFavoriteBtn(btn) {
  btn.style.display = 'inline-block';
}

function hideFavoriteBtn(btn) {
  btn.style.display = 'none';
}

function showFavoriteCard(quote, container) {
  const { id, text, author } = quote;
  const favoritesCard = document.createElement('div');
  favoritesCard.classList.add('favorite-card');
  favoritesCard.dataset.quoteId = id;
  favoritesCard.innerHTML = `<p>"${text}"</p>
  <p class="author">${author}</p>
  <i class="fas fa-solid fa-xmark fa-lg close-icon"></i>`;
  container.appendChild(favoritesCard);

  const closeIcon = favoritesCard.querySelector('.close-icon');
  closeIcon.addEventListener('click', () => {
    quote.isFavorite = !quote.isFavorite;
    hideFavoriteCard(id);
    if (quote.id == id) {
      toggleFavoriteBtnIcon(quote.isFavorite);
    }
  });
}

function hideFavoriteCard(id) {
  const card = document.querySelector(`.favorite-card[data-quote-id="${id}"]`);
  if (card) {
    card.remove();
  }

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
