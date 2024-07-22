function alterarStatus(gameId) {
    let gameItem = document.getElementById(`game-${gameId}`);
    let gameButton = gameItem.querySelector('.dashboard__item__button');
    let gameImage = gameItem.querySelector('.dashboard__item__img');

    if (gameButton.classList.contains('dashboard__item__button--return')) {
        // Return game
        gameButton.textContent = 'Alugar';
        gameButton.classList.remove('dashboard__item__button--return');
        gameImage.classList.remove('dashboard__item__img--rented');
    } else {
        // Rent game
        gameButton.textContent = 'Devolver';
        gameButton.classList.add('dashboard__item__button--return');
        gameImage.classList.add('dashboard__item__img--rented');
    }
}