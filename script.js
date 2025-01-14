const video = document.querySelector(".player__video");
const progress = document.querySelector(".progress");
const playerButton = document.querySelector(".player_button");
const volumeControl = document.querySelector(".volume");
const rewindButton = document.querySelector(".rewind");
const forwardButton = document.querySelector(".forward");

isPlaying = false;

function toggle () {
    if(isPlaying){
        video.pause();
        playerButton.textContent = "►" ;
        
    } else {
        video.play();
        playerButton.textContent = "❚❚" ;
    }

    isPlaying = !isPlaying;
}


function volume () {
    video.volume = volumeControl.value;
}

playerButton.addEventListener("click" , toggle);
volumeControl.addEventListener("input" , volume);

rewindButton.addEventListener("click" , () => {
    video.currentTime -= 10;
});

forwardButton.addEventListener("click" , () => {
    video.currentTime += 25;
});