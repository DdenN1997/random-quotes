function createFavoriteBtn(isFavorite, button) {
  button.innerHTML = isFavorite
    ? '<i class="fas fa-heart fa-2xl"></i>'
    : '<i class="far fa-heart fa-2xl"></i>';
}

function showFavoriteCard(quote, author, container) {
  const favoritesCard = document.createElement('div');
  favoritesCard.classList.add('favorite-card');
  favoritesCard.innerHTML = `<p>"${quote}"</p>
      <p class="author">${author}</p>`;
  container.appendChild(favoritesCard);
}

function hideFavoriteCard(quote) {
  const favoritesCards = document.querySelectorAll('.favorite-card');
  favoritesCards.forEach((card) => {
    if (card.textContent.includes(quote)) {
      card.remove();
    }
  });
}

export { createFavoriteBtn, showFavoriteCard, hideFavoriteCard };
