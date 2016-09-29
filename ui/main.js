console.log('Loaded!');

// change the text of main the main text div
var element = document.getElementById("main-text");

element.innerHTML = "New Value";

// move the image

var img = document.getElementById("madi");
var marginleft = 0;
function moveRight() {
    marginLeft = marginLeft + 10;
    imag.style.marginLeft = marginLeft + "px";
}
imag.onclick = function () {
    var interval = setInterval(moveRight, 100);
};