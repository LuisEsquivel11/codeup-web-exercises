"use strict"
$(() => {

    // jQuery...

    // Create an anchor with an id that will act as a button to toggle the css classes
    $('body').append(`
        <a href="#">Toggle Invisibility</a>
    `);

    // Attach an event handler using .on that will run the function when clicked
    $('a').on('click', () => {
        $('dd').toggleClass('invisible');
    });

    // BONUS
    // Attach an event handler to the 'dt' elements that will toggle the 'highlighted' class when clicked
    $('dt').on('click', function() {
        $(this).toggleClass('highlighted')
    });

    // Vanilla Js

    //----------------------Toggle Button -----------------------------------------------------------
    // //Create the new html element and store it in a variable
    // const vizToggleButton = document.createElement('button');
    // //Create a text node and store it in a variable
    // const vizToggleLabel = document.createTextNode('Toggle');
    // //Attach the new text node to the element
    // vizToggleButton.appendChild(vizToggleLabel);
    // //Find the position where the new element should be added
    // const vizToggleButtonPosition = document.getElementsByTagName('div')[4];
    // //Insert the new element into its position.
    // vizToggleButtonPosition.appendChild(vizToggleButton);
//----------------------Toggle Button -----------------------------------------------------------

    // const ddElements = document.querySelectorAll('dd');
    // vizToggleButton.addEventListener('click', () => {
    //     ddElements.forEach((ddElement) => {
    //         ddElement.classList.toggle('invisible');
    //     });
    // });

//==================================================================================================================

    //Jquery

   //Create a button that, when clicked, makes the last li in each ul have a yellow background.
    $('body').append(`
        <button class='toggleBackground'>Yellow Background</button>
    `);
    $('.toggleBackground').on('click', function()  {
        $("ul li:last-child").toggleClass('yellow-background')
    })

    //When any h3 is clicked, the lis underneath it should be bolded. Use font-weight: bold to achieve this.

    $('h3').on('click', function() {
        $(this).siblings().toggleClass('bold-font')
    });

    //When any list item is clicked, first li of the parent ul should have a font color of blue.

    $('li').on('click', function () {
        $(this).parent('ul').children('li').first().toggleClass('blue-text')
    })
//==========================BONUS===============================//



});
