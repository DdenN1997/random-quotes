import { currentQuote } from '../../index.js';

const favoritesContainer = document.getElementById('favorites-container');

const toggleBtn = document.getElementById('toggle-favorite-btn');
toggleBtn.addEventListener('click', toggleFavorite);

hideBtn(toggleBtn);

function toggleFavorite() {
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteIcon(currentQuote.isFavorite, toggleBtn);

  if (currentQuote.isFavorite) {
    showFavoriteCard(
      currentQuote.text,
      currentQuote.author,
      favoritesContainer
    );
  } else {
    hideFavoriteCard(currentQuote.text);
  }
}

function handleFavorite(isFavorite) {
  showBtn(toggleBtn);
  toggleFavoriteIcon(isFavorite, toggleBtn);
}

function toggleFavoriteIcon(isFavorite, button) {
  button.innerHTML = isFavorite
    ? '<i class="fas fa-heart fa-2xl"></i>'
    : '<i class="far fa-heart fa-2xl"></i>';
}

function showBtn(btn) {
  btn.style.display = 'inline-block';
}

function hideBtn(btn) {
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
  toggleFavoriteIcon,
  showFavoriteCard,
  hideFavoriteCard,
  showBtn,
  handleFavorite,
};
