"use strict"

//2. add a button to the html
// 3. when the button is clicked, change the background color of the page to your favorite color

document.getElementById('bg-button').addEventListener('click', changeBackgroundToFav)
function changeBackgroundToFav() {
   let body =  document.getElementById('body')
       body.classList.toggle('background-fav')

}


// TODO: add the needed JS so that the number selected in the number input will be added to the number in the span when the button is clicked

//Walk thru
// $('#add-btn').on('click', () => {
//     console.log($('#number').val());
// });
$('#add-btn').on('click', () => {
    const input = $('#number').val();
    const output = $('#sum-output').text();
    const total = parseInt(input) + parseInt(output)
    $('#sum-output').text(total);
});