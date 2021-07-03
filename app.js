document.addEventListener('DOMContentLoaded', () => {
  // card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png',
    },
    {
      name: 'fries',
      img: 'images/fries.png',
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png',
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png',
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png',
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png',
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png',
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png',
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png',
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png',
    },
    {
      name: 'pizza',
      img: 'images/pizza.png',
    },
    {
      name: 'pizza',
      img: 'images/pizza.png',
    },
  ];

  cardArray.sort(() => 0.5 - Math.random()); // shuffle cards randomly

  const grid = document.querySelector('.grid');
  const score = document.querySelector('#score');
  const result = document.querySelector('#result');

  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  // create board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  // check for matches
  function checkForMatch() {
    let cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match');
      cards[optionOneId].setAttribute('src', 'images/white.png');
      cards[optionOneId].style.pointerEvents = 'none';
      cards[optionTwoId].setAttribute('src', 'images/white.png');
      cards[optionTwoId].style.pointerEvents = 'none';
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png');
      cards[optionOneId].style.pointerEvents = 'auto';
      cards[optionTwoId].setAttribute('src', 'images/blank.png');
      cards[optionTwoId].style.pointerEvents = 'auto';
      alert('Wrong match, try again');
    }
    cardsChosen = []; // clear array for next flip
    cardsChosenId = []; // clear array for next flip
    score.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      result.innerHTML = '<b>Congratulations!</b>You found all matches!';
      let newGame = document.createElement('button');
      newGame.className = 'new-game';
      newGame.innerHTML = 'New Game';
      newGame.onclick = () => {
        location.reload();
      };
      result.appendChild(newGame);
    }
  }

  // flip card
  function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    this.style.pointerEvents = 'none';
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 100);
    }
  }

  createBoard();
});
