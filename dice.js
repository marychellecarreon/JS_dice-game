
console.log("Dice game. Please roll the dice 3 times. If 6 appears, you won!");
var rolls = 0;
var wins = 0;

function diceRoll()  {
    var dice = Math.random();
    if (dice <= 1) {
        dice = 1;
    }
    else if (dice <= 2) {
        dice = 2;
    }
    else if (dice <= 3) {
        dice = 3;
    }
    else if (dice <= 4) {
        dice = 4;
    }
    else if (dice <= 5) {
        dice = 5;
    }
    else if (dice <= 6) {
        dice = 6;
    }
    return dice;
}

function diceGame() {
    do {
        var dice = diceRoll();
        console.log(dice);
        rolls++;
        if (dice === 6) {
            console.log("Your a winner!");
            wins++;
            if (rolls === 1) {
                console.log("It took " + rolls + " try");
            }
            else {
                console.log("It took " + rolls + " tries");
            }
            break;
        }
    }
    while (rolls <= 2);
    if (dice !== 6) {
        console.log("You lost");
    }
}

diceGame();
console.log("Times won: " + wins);
