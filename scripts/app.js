// Init querySelector
const $hit = document.querySelector("#hit");
const $stick = document.querySelector("#stick");
const $play = document.querySelector("#play");
const $playerHand = document.querySelector("#player-hand");
const $dealerHand = document.querySelector("#dealer-hand");
const $playerScore = document.querySelector("#player-score");
const $dealerScore = document.querySelector("#dealer-score");
const $outcome = document.querySelector("#outcome");
const $playerScoreFull = document.querySelector("#player-score-full");
const $dealerScoreFull = document.querySelector("#dealer-score-full");
const $intro = document.querySelector(".intro");
const $stats = document.querySelector("#stats");
const $betting = document.querySelector("#betting");
const $countWins = document.querySelector("#count-wins");
const $countDraws = document.querySelector("#count-draws");
const $countLosses = document.querySelector("#count-losses");
const $playerChips = document.querySelector("#player-chips");
const $pot = document.querySelector("#pot");

// add eventListeners
$play.addEventListener('click', startGame);
$hit.addEventListener('click', _ => hit("player"));
$stick.addEventListener('click', _ => endGame());

// Init display
$hit.style.display = "none";
$stick.style.display = "none";
$playerScoreFull.style.display = "none";
$dealerScoreFull.style.display = "none";

// Init gameplay variables
let deck = [];
let playerHand = [];
let dealerHand = [];
let playerScore;
let dealerScore;
let isOngoing = false;

// Init scoring variables
let countWins = 0;
let countDraws = 0;
let countLosses = 0;

// Init betting variables
let playerChips = 500;
let stake = 0;
let pot = 0;
let betPlaced = false;
let betMsg = "";

// Cache cards
let preloadImages = document.createElement('img');