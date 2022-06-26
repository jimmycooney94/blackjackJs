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

