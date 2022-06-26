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


const endGame = function () {
    if (playerScore > 21) {
        $outcome.innerHTML = "You lost! :(";
    }
    else if (dealerScore > 21 || dealerScore < playerScore) {
        $outcome.innerHTML = "You win!";
    }
    else if (dealerScore === playerScore) {
        $outcome.innerHTML = "You drew!";
    }
    else {
        $outcome.innerHTML = "You lost! :(";
    }
    $hit.disabled = true;
    $stick.disabled = true;
}
