var $circles = document.querySelectorAll(".circle");
var $next = document.querySelector(".Next");
var $prev = document.querySelector(".Prev");
var $bar = document.querySelector(".bar")

var cont = 1;

$next.addEventListener('click', function () {
    cont += 1;

    if (cont > $circles.length) {
        cont = $circles.length
    }

    border();
    bar(cont);
    disabled(cont);
})

$prev.addEventListener('click', function () {
    cont -= 1;

    if (cont < 1) {
        cont = 1
    }
    
    border();
    bar(cont);
    disabled(cont);
})

function border() {
    for (let i = 0; i < $circles.length; i += 1) {
        if (i < cont) {
            $circles[i].classList.add("border");
        }
        else {
            $circles[i].classList.remove("border");
        }
    }
}

function bar(cont) {
        if (cont === 2) {
            $bar.style.width = "35%";
            border(1);
        }
        else if (cont === $circles.length - 1) {
            $bar.style.width = "65%";
            border(2);
        }
        else if (cont === $circles.length){
            $bar.style.width = "100%"
            border(3);
        }
        else {
            $bar.style.width = "0%";
        }
}

function disabled(cont) {
    if (cont === 1) {
        $prev.disabled = true;
    }
    else if (cont === $circles.length) {
        $next.disabled = true;
    }
    else {
        $prev.disabled = false;
        $next.disabled = false;
    }
}
