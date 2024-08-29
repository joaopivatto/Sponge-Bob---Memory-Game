let player1Score = 0;
let player2Score = 0;

let firstCard = 0;
idCard = [[,]];
let card1;
//inner card1

let role = 0;
// 0 -> allow
// 1 -> disallow

let turn = 1;

// 1 -> player1
// 2 -> player2


cards = [[0, "imagens/aguaviva.jpeg"],
[1, "imagens/bob.jpeg"],
[2, "imagens/bob+patrick.jpeg"],
[3, "imagens/bob+sandy.jpeg"],
[4, "imagens/bob1.jpeg"],
[5, "imagens/bobcooking.jpeg"],
[6, "imagens/bobesponjaespatula.jpeg"],
[7, "imagens/bucketkrab.jpeg"],
[8, "imagens/casas.jpeg"],
[9, "imagens/lulamolusco.jpeg"],
[10, "imagens/lulamoluscoclarinete.jpeg"],
[11, "imagens/mskrab.jpeg"],
[12, "imagens/patrick1.jpeg"],
[13, "imagens/planktonroubando.jpeg"],
[14, "imagens/siricascudo.jpeg"],
[0, "imagens/aguaviva.jpeg"],
[1, "imagens/bob.jpeg"],
[2, "imagens/bob+patrick.jpeg"],
[3, "imagens/bob+sandy.jpeg"],
[4, "imagens/bob1.jpeg"],
[5, "imagens/bobcooking.jpeg"],
[6, "imagens/bobesponjaespatula.jpeg"],
[7, "imagens/bucketkrab.jpeg"],
[8, "imagens/casas.jpeg"],
[9, "imagens/lulamolusco.jpeg"],
[10, "imagens/lulamoluscoclarinete.jpeg"],
[11, "imagens/mskrab.jpeg"],
[12, "imagens/patrick1.jpeg"],
[13, "imagens/planktonroubando.jpeg"],
[14, "imagens/siricascudo.jpeg"]]

let clickAudio = new Audio('../audios/switch-sound.mp3');
let successAudio = new Audio('../audios/applepay.mp3');
let errorAudio = new Audio('../audios/bob-esponja-fail-sound.mp3');
let winAudio = new Audio('../audios/ayrton-senna-tema-da-vitoria.mp3')

window.onload = (event) => {
    sortCards(cards);
    cardImages();
    const turnElement1 = document.getElementById("turn1");
    turnElement1.style.backgroundColor = "var(--primary)"
}

function reloadPage(button) {
    window.location.reload();
}

function turnCard(div) {
    if (role != 1) {
        const inner = document.getElementById(div);
        clickAudio.play();
        inner.style.transform = "rotateY(180deg)";
        let cardPlace = div.replace("inner", "");

        if (firstCard == 0) {
            firstCard = 1;
            idCard[0][0] = cards[cardPlace - 1][0];
            card1 = document.getElementById("inner" + cardPlace);

        } else if (firstCard == 1) {
            role = 1;
            idCard[0][1] = cards[cardPlace - 1][0]
            setTimeout(function () {
                if (idCard[0][0] != idCard[0][1]) {
                    card2 = document.getElementById("inner" + cardPlace);

                    card1.style.transform = "rotateY(0deg)";
                    card2.style.transform = "rotateY(0deg)";

                    errorAudio.play();


                    firstCard = 0;

                    if (turn == 1) {
                        turn = 2;

                        const turn1Element = document.getElementById("turn1");
                        turn1Element.style.backgroundColor = "transparent"

                        const turnElement2 = document.getElementById("turn2");
                        turnElement2.style.backgroundColor = "var(--primary)"
                    } else {
                        turn = 1;
                        const turnElement1 = document.getElementById("turn1");
                        turnElement1.style.backgroundColor = "var(--primary)"

                        const turnElement2 = document.getElementById("turn2");
                        turnElement2.style.backgroundColor = "transparent"
                    }
                } else {
                    firstCard = 0;
                    successAudio.play();
                    if (turn == 1) {
                        player1Score++;
                        const player1ScoreElement = document.getElementById("score1");
                        player1ScoreElement.innerText = player1Score;
                    } else {
                        player2Score++;
                        const player2ScoreElement = document.getElementById("score2");
                        player2ScoreElement.innerText = player2Score;
                    }

                    if (player1Score + player2Score == 15) {

                        const player1Element = document.getElementById("player1");
                        player1Element.innerText = "";

                        const player1ScoreElement = document.getElementById("score1");
                        player1ScoreElement.innerText = "";

                        const player2Element = document.getElementById("player2");
                        player2Element.innerText = "";

                        const player2ScoreElement = document.getElementById("score2");
                        player2ScoreElement.innerText = "";

                        const turnElement = document.getElementById("turn");
                        turnElement.style.fontSize = "50px"
                        turnElement.innerText = player1Score > player2Score ? ("PLAYER 1 WINS") : ("PLAYER 2 WINS");

                        winAudio.play();
                    }
                }

            }, 1000);

        }
    }

    setTimeout(function () {
        role = 0;
    }, 1500);
}

function sortCards(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[random]] = [cards[random], cards[i]];
    }

    return cards;
}

function cardImages() {
    for (i = 1; i < cards.length + 1; i++) {
        image = document.getElementById("img" + i);
        imageName = "../" + cards[i - 1][1];
        image.src = imageName;
    }
}

