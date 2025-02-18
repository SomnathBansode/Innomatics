let gameType = Array.from(document.querySelectorAll(".game-type"));
let selectedCategory = null;
let cards = [];
let flippedCards = [];
let score = 0;
let timer = 30;
let gameTimer;
let isGameOver = false;

const categories = {
  fruits:[
    "🍎",
    "🍎",
    "🍊",
    "🍊",
    "🍇",
    "🍇",
    "🍉",
    "🍉",
    "🍍",
    "🍍",
    "🥭",
    "🥭",
  ],
  emojis: [
    "😀",
    "😀",
    "😂",
    "😂",
    "😎",
    "😎",
    "🤩",
    "🤩",
    "🥳",
    "🥳",
    "🤔",
    "🤔",
  ],
  animals: [
    "🐶",
    "🐶",
    "🐱",
    "🐱",
    "🐭",
    "🐭",
    "🐹",
    "🐹",
    "🐻",
    "🐻",
    "🐯",
    "🐯",
  ],
  planets: [
    "🌍",
    "🌍",
    "🌕",
    "🌕",
    "🪐",
    "🪐",
    "🌑",
    "🌑",
    "☀️",
    "☀️",
    "🌟",
    "🌟",
  ],
  flags: [
    "🇺🇸",
    "🇺🇸",
    "🇬🇧",
    "🇬🇧",
    "🇮🇳",
    "🇮🇳",
    "🇯🇵",
    "🇯🇵",
    "🇨🇦",
    "🇨🇦",
    "🇧🇷",
    "🇧🇷",
  ],
};

function startGame(category) {
  clearInterval(gameTimer);
  isGameOver = false;
  score = 0;
  timer = 30;
  flippedCards = [];
  cards = shuffle([...categories[category]]);
  document.querySelector(".score").textContent = "Score: 0";
  document.querySelector(".timer").textContent = "Time: 30s";
  createCards();
  startTimer();
  document.querySelector(".end").style.display = "none";
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function createCards() {
  const gameContainer = document.querySelector(".game-container");
  gameContainer.innerHTML = "";
  cards.forEach((card, index) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.dataset.index = index;
    cardElement.addEventListener("click", () => handleCardClick(cardElement));

    gameContainer.appendChild(cardElement);
  });
}

function handleCardClick(card) {
  if (
    flippedCards.length === 2 ||
    card.classList.contains("flipped") ||
    isGameOver
  )
    return;

  card.textContent = cards[card.dataset.index];
  card.classList.add("flipped");
  flippedCards.push(card);

  if (flippedCards.length === 2) {
    checkForMatch();
  }
}
function checkForMatch() {
  const [card1, card2] = flippedCards;
  if (cards[card1.dataset.index] === cards[card2.dataset.index]) {
    card1.classList.add("matched");
    card2.classList.add("matched");
    score++;
    document.querySelector(".score").textContent = `Score: ${score}`;
    flippedCards = [];

    if (document.querySelectorAll(".matched").length === cards.length) {
      clearInterval(gameTimer);
      isGameOver = true;
      document.querySelector(".end").style.display = "block";
      document.querySelector(".end").style.color = "green";
      document.querySelector(
        ".end"
      ).textContent = `🎉 You Won! Final Score: ${score}`;
    }
  } else {
    setTimeout(() => {
      card1.textContent = "";
      card2.textContent = "";
      card1.classList.remove("flipped");
      card2.classList.remove("flipped");
      flippedCards = [];
    }, 1000);
  }
}

function startTimer() {
  gameTimer = setInterval(() => {
    if (timer === 0 && !isGameOver) {
      clearInterval(gameTimer);
      isGameOver = true;
      document.querySelector(".end").style.display = "block";
      document.querySelector(".end").style.color = "red";
      document.querySelector(".end").textContent =
        "Game Over! Final Score: " + score;
    } else if (!isGameOver) {
      timer--;
      document.querySelector(".timer").textContent = `Time: ${timer}s`;
    }
  }, 1000);
}

function resetGame() {
  clearInterval(gameTimer);
  document.querySelector(".timer").textContent = "Time: 30s";
  selectedCategory = null;
  document.querySelector(".score").textContent = "Score: 0";
  document.querySelector(".game-container").innerHTML = "";

  document.querySelectorAll(".game-type").forEach((link) => {
    link.classList.remove("selected");
    document.querySelector(".end").style.display = "none";
  });
}

gameType.forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelectorAll(".game-type").forEach((link) => {
      link.classList.remove("selected");
    });

    element.classList.add("selected");

    if (selectedCategory !== element.textContent.toLowerCase()) {
      selectedCategory = element.textContent.toLowerCase();
      startGame(selectedCategory);
    }
  });
});

document.querySelector(".reset-button").addEventListener("click", resetGame);
