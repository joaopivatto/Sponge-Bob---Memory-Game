let readySound = new Audio('../audios/estou-pronto-bob-esponja.mp3');

function playAudio(){
    indexSoundElement = document.getElementById("indexSound");
    indexSoundElement.play();
}
    


function openGame(){
    indexSoundElement = document.getElementById("indexSound");
    indexSoundElement.pause();
    readySound.play();
    setTimeout(function(){
        window.location.replace("game.html");
    }, 5000)
}