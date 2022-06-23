const randCard = function () {
    let cardNum = Math.floor(Math.random() * 13 + 1);
    let suitNum = Math.floor(Math.random() * 4 + 1);
    const numConvert = { 1: "a", 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, 11: "j", 12: "q", 13: 'k' };
    const suitConvert = { 1: "h", 2: "d", 3: "s", 4: "c" };
    const imgName = numConvert[cardNum] + suitConvert[suitNum] + ".png";
    return { "cardNum": cardNum, "suitVal": suitNum, "imgName": imgName };
}

const calcHand = function (cardNums) {
    // Add non-ace cards first, then loop through aces and add 1 or 11 depending on current sum
    const notAces = cardNums.filter(val => val !== 1);
    let sum = notAces.reduce((partialSum, a) => partialSum + a, 0);
    const aces = cardNums.filter(val => val === 1);
    for (let ace of aces) { if (sum <= 10) { sum = sum + 11; } else { sum = sum + 1; } }
    return sum;
}
