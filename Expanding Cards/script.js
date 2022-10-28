var $cards = document.querySelectorAll(".cards");


for (var i = 0; i < $cards.length; i += 1) {
    $cards[i].addEventListener('click', function () {
        remove()
        this.classList.add('expand');
    })
}

function remove() {
    for (var i = 0; i < $cards.length; i += 1) {
        $cards[i].classList.remove('expand');
    }
}


