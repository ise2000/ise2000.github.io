let red = 255;
let green = 255;
let blue = 255;
let color = "#000000";

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
    //document.getElementById("colorpicker").style.backgroundColor = color;
    document.body.  style.backgroundColor = color;
    document.getElementById("colorHex").innerText = color;
}

function pad(number) {
    return number.toString().length < 2 ? "0" + number : number;
}

function copyText() {
    const el = document.createElement('textarea');
    el.value = color;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert("The color copied to clipboard.");
}