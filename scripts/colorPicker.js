let red = 0;
let green = 0;
let blue = 0;
let color = "#000000";
window.onload = () => {
    document.getElementById("colorpicker").style.backgroundColor = color;
}
function redChange(value) {
    red = value;
    combine();
}

function greenChange(value) {
    green = value;
    combine();
}

function blueChange(value) {
    blue = value;
    combine();
}

function combine() {
    color = "#" + pad(Number.parseInt(red).toString(16)) + pad(Number.parseInt(green).toString(16)) + pad(Number.parseInt(blue).toString(16));
    document.getElementById("colorpicker").style.backgroundColor = color;
    console.log(color);
}

function pad(number) {
    return number.toString().length < 2 ? "0" + number : number;
}