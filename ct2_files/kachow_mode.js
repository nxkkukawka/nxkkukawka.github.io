
/* **************************** Kachow Mode Script **************************** */

var kachowMode = document.getElementById("kachowMode");
var isPlaying = false;

function togglePlay() {
  isPlaying ? kachowMode.pause() : kachowMode.play();
};

kachowMode.onplaying = function() {
  isPlaying = true;
};
kachowMode.onpause = function() {
  isPlaying = false;
};
