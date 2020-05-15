var audio1 = document.getElementById("audioID");
var audio2 = document.getElementById("audioID");
var audio3 = document.getElementById("audioID");
var audio4 = document.getElementById("audioID");
var audio5 = document.getElementById("audioID");
var audio6 = document.getElementById("audioID");

function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}
function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}