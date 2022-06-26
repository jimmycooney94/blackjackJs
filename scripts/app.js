// Init querySelector
const hitBtn = document.querySelector("#hit");
const stickBtn = document.querySelector("#stick");
const yourCards = document.querySelector("#your-cards");
const dealerCards = document.querySelector("#dealer-cards");
const yourScore = document.querySelector("#your-score");
const dealerScore = document.querySelector("#dealer-score");
const outcome = document.querySelector("#outcome");

// add eventListeners
hitBtn.addEventListener('click', _ => hit("player"));
stickBtn.addEventListener('click', stick);

// Init variables
let deck = [];
let yourHand = [];
let dealerHand = [];
// onLoad
window.onload = init();