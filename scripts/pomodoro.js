const TIME = 25*60; // time of pomodoro, sec
const BREAK_TIME = 5*60; //time of break, sec
let time = TIME; 
let isActive = false; // is pomodoro active at the moment
var intervalID; 

window.onload = () => {
    document.getElementById("time").innerHTML = timeToString(time); // set the time when window is loaded 
}

// countdown start when the space key is pressed
document.onkeyup = function(event) {
    if (event.keyCode === 32) {
        startCountdown(); 
    }
}

function tick(interval) {
    if (time > 0) {
        time = time - 1;
    } else {
        clearInterval(interval);
        document.getElementById("time").style.color = "#00de2c";
        time = BREAK_TIME;
        startBreak();
    }
    document.getElementById("time").innerHTML = timeToString(time);
}

function startCountdown() {
    if (!isActive) {
        isActive = true;
        intervalID = setInterval(()=>tick(intervalID), 1000);
        document.getElementById("startButton").innerHTML = "stop";
    } else {
        clearInterval(intervalID);
        time = TIME;
        isActive = false;
        document.getElementById("time").innerHTML = timeToString(time);
        document.getElementById("startButton").innerHTML = "start";
        document.getElementById("time").style.color = "#ff0000";
    }
}

function timeToString(time){
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return pad(minutes) + ":" + pad(seconds);
}

function pad(number) {
    return (number < 10) ? '0' + number.toString() : number.toString();
}

function startBreak() {
    intervalID = setInterval(()=>{
    if (time > 0) {
        time = time - 1;
        document.getElementById("time").innerHTML = timeToString(time);
    } else {
        clearInterval(intervalID);
        time = TIME;
        isActive = false;
        
        document.getElementById("time").innerHTML = timeToString(time);
        document.getElementById("time").style.color = "#ff0000";
        document.getElementById("startButton").innerHTML = "start";
    }}, 1000);   
}
