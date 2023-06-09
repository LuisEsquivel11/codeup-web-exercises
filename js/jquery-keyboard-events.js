"use strict"

// !! key events fired in the following order: keydown->keypress->keyup !!

// ===== keydown

// recognizes all keyboard keys when they are pushed down
// repeats as key is held down

$(document).on('keydown', (e) => {
    console.log(e.key);
});


// ===== keypress

// recognizes the character that is typed
// only recognizes keys that can have a typed output

$(document).on('keypress', (e) => {
    console.log(e.key);
});


// ===== keyup

// recognizes all keyboard keys when they are pushed down
// recognizes all keyboard keys when they are released
// will fire only once per key push

$(document).on('keyup', (e) => {
    console.log(e.key);
});

// keyboard events listeners can be bound to specific DOM elements

$('#input-example').on('keyup', (e) => {
    console.log(e.key);
    console.log($(e.target).val());
});


/*

    Question 1:

    A keyup event will repeat while a key is held down

    A) True
    B) False


    Question 2:

    A keypress event will not fire when the arrow keys are pressed.

    A) True
    B) False


    Question 3:

    Keydown, keypress and keyup event listeners are bound to the document. When a key is typed, all
    events will fire simultaneously.

    A) True
    B) False

 */


// ===== off (removes all events from a selector or a specific event/selector/handler)

// $(document).on('keydown', (e) => {
//     console.log(e.key);
// });
//
// $('#input-example').on('keyup', (e) => {
//     console.log(e.key);
//     console.log($(e.target).val());
// });
//
// $('#input-example').off();




// ===== preventDefault()

// $(document).keydown(function(e) {
//     console.log(e.key);
//     if (e.key === " ") {
//         e.preventDefault();
//     }
// });



// ===== konami code!

// https://www.goskills.com/


