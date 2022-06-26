const startGame = function () {
    // Init DOM
    $intro.remove();
    $stats.style.display = "flex";
    $hit.style.display = "block";
    $stick.style.display = "block";
    $hit.disabled = false;
    $stick.disabled = false;
    $play.innerHTML = "Start again";
    $playerScoreFull.style.display = "block";
    $dealerScoreFull.style.display = "block";
    $playerScore.innerHTML = 0;
    $dealerScore.innerHTML = 0;
    $playerHand.replaceChildren();
    $dealerHand.replaceChildren();
    $outcome.innerHTML = "";
    // Init variables
    deck = shuffle(newDeck());
    playerHand = [];
    dealerHand = [];
    // Deal first cards
    hit("player");
    hit("player");
    hit("dealer");
    // End game immediately if player has blackjack
    if (playerScore === 21) {
        hit("dealer");
    }
}

const hit = function (hitter) {
    // Get new card
    let newCard = deck.pop();
    let newCardImg = document.createElement('img');
    newCardImg.src = "/images/cards/" + newCard.imgName;
    // Update hand
    if (hitter === "player") {
        playerHand.push(newCard);
        $playerHand.append(newCardImg);
        playerScore = calcHand(playerHand);
        $playerScore.innerHTML = playerScore;
        // end game if bust
        if (playerScore > 21) {
            endGame("lose");
        }
        // Hand over to dealer if 5 cards
        else if (playerScore === 21 || playerHand.length === 5) {
            endGame();
        }
    }
    else if (hitter === "dealer") {
        dealerHand.push(newCard);
        $dealerHand.append(newCardImg);
        dealerScore = calcHand(dealerHand);
        $dealerScore.innerHTML = dealerScore;
    }
}