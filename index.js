function randomNumber() {
    return Math.floor(Math.random() * 6 + 1);
}

// var randomNumber1 = Math.random();
// randomNumber1 = Math.floor(randomNumber1 * 6 + 1);

// var randomNumber2 = Math.random();
// randomNumber2 = Math.floor(randomNumber2 * 6 + 1);

function play() {
    var randomNumber1 = randomNumber();
    var randomNumber2 = randomNumber();

    document.querySelector("#player-1 img").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector("#player-2 img").setAttribute("src", "images/dice" + randomNumber2 + ".png");

    if (randomNumber1 == randomNumber2) {
        document.querySelector("h1").textContent = "It's Draw !";
        document.querySelector("#player-1 h2").textContent = "Player 1";
        document.querySelector("#player-2 h2").textContent = "Player 2";

    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").textContent = "Player 1 Wins !";
        document.querySelector("#player-1 h2").textContent = "🥇 Player 1";
        document.querySelector("#player-2 h2").textContent = "Player 2";
    } else {
        document.querySelector("h1").textContent = "Player 2 Wins !";
        document.querySelector("#player-2 h2").textContent = "Player 2 🥇";
        document.querySelector("#player-1 h2").textContent = "Player 1";
    }
}