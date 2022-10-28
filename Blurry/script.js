var $loading = document.querySelector("#loading");
var $img = document.querySelector("#img");

var load = 0;
var interval = setInterval(Blurry, 30);
var blurry = 30
var opacity2 = 1;

function Blurry() {
    load += 1;

    $loading.textContent = load + "%"

    if (load === 100) {
        clearInterval(interval);
    }

    opacity2 -= 0.01;
    console.log(opacity2);
    $loading.style.opacity = opacity2;

    blurry -= 0.3;
    $img.style.filter = `blur(${blurry}px)`;
}