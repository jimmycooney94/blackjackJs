const newGame = function () {
    init();
    betModal();
}

const init = function () {
    // Init DOM
    $intro.remove();
    $stats.style.display = "flex";
    $betting.style.display = "flex";
    $playerChips.innerHTML = playerChips;
    $hit.style.display = "block";
    $stick.style.display = "block";
    $hit.disabled = false;
    $stick.disabled = false;
    $play.disabled = true;
    $play.innerHTML = "Start again";
    $playerScoreFull.style.display = "block";
    $dealerScoreFull.style.display = "block";
    $playerScore.innerHTML = 0;
    $dealerScore.innerHTML = 0;
    $playerHand.replaceChildren();
    $dealerHand.replaceChildren();
    $outcome.innerHTML = "";
    betMsg = "Please place your bet. You can bet up to " + playerChips;
    // Init variables
    stake = 0;
    pot = 0;
    isOngoing = true;
    deck = shuffle(newDeck());
    playerHand = [];
    dealerHand = [];
    betPlaced = false;
}

const betModal = function () {
    // Init betMsg
    betMsg = "How much do you want to bet?";
    betMsg += "<br><br>";
    betMsg += "You currently have " + playerChips + " chips.";
    $betMsg.innerHTML = betMsg;
    // Open the betting modal with bet button disabled
    $betModal.style.display = "flex";
    $inputBetAmount.value = null;
    $placeBet.disabled = true;
}

const setBetDisabled = function (stake) {
    if (Number.isInteger(parseInt(stake)) === false) {
        betMsg = "Please enter a number!";
        betMsg += "<br><br>";
        betMsg += "You currently have " + playerChips + " chips.";
        $betMsg.innerHTML = betMsg;
        $placeBet.disabled=true;
    }
    else if (stake < 0) {
        betMsg = "You can't place a negative bet!";
        betMsg += "<br><br>";
        betMsg += "You currently have " + playerChips + " chips.";
        $betMsg.innerHTML = betMsg;
        $placeBet.disabled=true;
    }
    else if (stake > playerChips) {
        betMsg = "You can't stake more chips than you have!";
        betMsg += "<br><br>";
        betMsg += "You currently have " + playerChips + " chips.";
        $betMsg.innerHTML = betMsg;
        $placeBet.disabled=true;
    }
    else {
        $placeBet.disabled=false;
    }
}

const placeBet = function (stake) {
    $betModal.style.display = "none";
    pot = stake;
    $pot.innerHTML = pot;
    playerChips -= stake;
    $playerChips.innerHTML = playerChips;
    startGame()
}

const startGame = function () {
    $play.disable = true;
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
    newCardImg.classList.add("card");
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
