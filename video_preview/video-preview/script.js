"use strict";

console.log("page loaded...");

let now_playing_url = "./assets/Pexels Videos 1851190.mp4";

//Now Playing video functions
function preview_video_over(player) {
    console.log("Mouse in.");
    player.play();
    video_player.muted = true;
}

function preview_video_out(player) {
    console.log("Mouse out.");
    player.pause();
}

let video_player = document.getElementById("now-playing");

//Start videos muted on page load
video_player.muted = true;

//Attach hover functions to video
video_player.addEventListener(
    "mouseover",
    function() {
        preview_video_over(this);
    }
);

video_player.addEventListener(
    "mouseout",
    function() {
        preview_video_out(this);
    }
);