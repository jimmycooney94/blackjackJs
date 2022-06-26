const init = function () {
    // init deck
    deck = shuffle(newDeck());
    // deal 2 cards to player
    hit("player");
    hit("player");
}

const newDeck = function () {
    // init deck variables
    const deck = [];
    const suits = ['c', 's', 'd', 'h'];
    const values = ['a', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'j', 'q', 'k'];
    // create deck
    for (let suit of suits) {
        for (let value of values) {
            imgName = value + suit + ".png";
            let card = { "Suit": suit, "Value": value, "imgName": imgName };
            deck.push(card);
        }
    }
    return deck;
}

const shuffle = function (inputArray) {
    // init variables
    const shuffledDeck = [];
    let randIndex;
    let el;
    // take random cards from unshuffled pile and add to shuffled pile
    while (inputArray.length > 0) {
        randIndex = Math.floor(Math.random() * inputArray.length);
        shuffledDeck.push(inputArray[randIndex]);
        inputArray.splice(randIndex, 1);
    }
    return shuffledDeck;
}

const calcHand = function (cards) {
    // Get an array of card values only - need to convert a/j/q/k/ to 1/10/10/10 respectively
    let cardNums = [];
    let cardValue;
    for (let card of cards) {
        cardNums.push(parseInt(card.Value.toString().replace("a", 1).replace("j", 10).replace("q", 10).replace("k", 10)));
    }
    console.log(cardNums);
    // Add non-ace cards first, then loop through aces and add 1 or 11 depending on current sum
    const notAces = cardNums.filter(val => val !== 1);
    let sum = notAces.reduce((partialSum, a) => partialSum + a, 0);
    const aces = cardNums.filter(val => val === 1);
    for (let ace of aces) { if (sum <= 10) { sum = sum + 11; } else { sum = sum + 1; } }
    return sum;
}

// *** GAMEPLAY FUNCTIONS ***

const hit = function (hitter) {
    // Get new card
    let newCard = deck.pop();
    let newCardImg = document.createElement('img');
    newCardImg.src = "/images/cards/" + newCard.imgName;
    // Update hand
    if (hitter === "player") {
        yourHand.push(newCard);
        yourCards.append(newCardImg);
        yourScore.innerHTML = calcHand(yourHand);
    }
    else if (hitter === "dealer") {
        dealerHand.push(newCard);
        dealerCards.append(newCardImg);
    }
}

const stick = function () {
    console.log("stick");
}