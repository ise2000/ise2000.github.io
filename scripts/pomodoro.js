const TIME = 25*60;
let time = TIME; 
let isActive = false;
var intervalID;

function timeToString(time){
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return pad(minutes) + ":" + pad(seconds);
}

function pad(number) {
    return (number < 10) ? '0' + number.toString() : number.toString();
}


function tick(interval) {
    if (time > 0) {
        time = time - 1;
        document.getElementById("time").innerHTML = timeToString(time);
    }
    else 
        clearInterval(interval);
}

function startCountdown() {
    if (!isActive) {
        isActive = true;
        intervalID = setInterval(()=>tick(intervalID), 1000);
        document.getElementById("startButton").innerHTML = "stop";
    }
    else {
        clearInterval(intervalID);
        time = TIME;
        isActive = false;
        document.getElementById("time").innerHTML = timeToString(time);
        document.getElementById("startButton").innerHTML = "start";
    }
}

window.onkeyup = function(event) {
    if (event.keyCode === 32) {
        startCountdown();
    }
}