"use strict"


// $(document).keydown( function(event) {
//     console.log(event.key);
// });


// const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]

//The Konami Code: Up, Up, Down, Down, Left, Right, Left, Right, B, A ( ↑ ↑ ↓ ↓ ← → ← → B A Enter)


// function maybeCorrectCode(event) {
//     // if(event.key === 'ArrowUp') {
//     //     console.log(0)
//     // }
//     console.log(event);
// }

const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}
function strobeBackground() {
    setInterval(setBg,  100)
}

const konamiCode = ['ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter']

let correctCode = " "

$(document).keydown( function(event) {
    correctCode += event.key;

    if (correctCode.includes(konamiCode)) {
        alert("You have added 30 lives")
        $('body').css('background-color', strobeBackground)
    }

});


