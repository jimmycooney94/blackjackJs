// Init querySelector
const hitBtn = document.querySelector("#hit");
const stickBtn = document.querySelector("#stick");
const playBtn = document.querySelector("#play");
const yourCards = document.querySelector("#your-cards");
const dealerCards = document.querySelector("#dealer-cards");
const yourScore = document.querySelector("#your-score");
const dealerScore = document.querySelector("#dealer-score");
const outcome = document.querySelector("#outcome");

// add eventListeners

playBtn.addEventListener('click', play);

// Init variables
let deck = [];
let yourHand = [];
let dealerHand = [];
// onLoad
window.onload = init();