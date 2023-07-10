// JS function alerts when the page finishes loading.
// window.onload = function() {
//     alert("The window has loaded");
// }

//jQuery alerts when page finishes loading
// $(function() {
//     alert("The window has loaded.");
// });

//jQuery arrow function
// $(()=> {
//     alert("Window has loaded!");
// });

//jQuery select id to change css
// $(() => {
//     $('#id-container').css('background-color', 'red');
// });
//
// // jQuery class selector
// $(".title").css('color', 'purple');
//
// //vanilla JS query select all title classes
// let titleElements = document.querySelectorAll('.title');
// titleElements.forEach(titleElements => {
// titleElements.style.color = "blue";
// });
//
// //jQuery to select and change all li elements
// $('li').css('color', 'pink');
//
// //multiple selectors jQuery
// $('h1, p, .highlight').css('font-weight', 'bold');
//
// //all selectors jQuery
// $('*')
//     .css('outline', '1px solid lightblue')
//     .css('font-weight', 'bold');

// ID jQuery Exercise
// let paragraph1Content = $('#paragraph1').html();
// alert(paragraph1Content);

// Classes jQuery Exercise
// $('.codeup').css('border', '1px solid red');

//Element jQuery Exercise
// $('li').css('font-size', '20px');
// let h1Alert = $('h1').html();
// alert(h1Alert);

//Multiple selectors jQuery Exercise
// $('h1, p, li').css('background-color', 'yellow');

// function underLineThis() {
//     $(this).css('text-decoration', 'underline');
// }
//
// function noUnderLineThis() {
//     $(this).css('text-decoration', 'none');
// }
//
// function changeToPointer() {
//     $(this).css('cursor', 'pointer')
// }
//
// function changeFromPointer() {
//     $(this).css('cursor', 'default')
// }
//
// $('h2')
//     .on('click', underLineThis)
//     .on('dblclick', noUnderLineThis)
//     .on('mouseenter', changeToPointer)
//     .on('mouseleave', changeFromPointer)

//Remove your custom jQuery code from previous exercises.
//
// Add jQuery code that will change the background color of an h1 element when clicked.
//
//     $('h1').on('click', (e) => {
//         $(e.target).css('background', 'red')
//     });

function headerBackground() {
    $(this).css('background-color', 'red')
}
   $('h1')
       .on('click', headerBackground)

// Make all paragraphs have a font size of 18px when they are double clicked.

    // $('p').on('dblclick', (e) => {
    //     $(e.target).css('font-size', '18px')
    // });
function changePSize() {
    $(this).css('font-size', '18px')
}
    $('p')
        .on('dblclick', changePSize)


// Set all li text color to red when the mouse is hovering; reset to black when it is not.

$('li').on('mouseenter', function(){
   $(this).css('color', 'red')
});

$('li').on('mouseleave', function(){
    $(this).css('color', 'black')
});