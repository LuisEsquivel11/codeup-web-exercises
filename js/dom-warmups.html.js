"use strict"

//2. add a button to the html
// 3. when the button is clicked, change the background color of the page to your favorite color

document.getElementById('bg-button').addEventListener('click', changeBackgroundToFav)
function changeBackgroundToFav() {
   let body =  document.getElementById('body')
       body.classList.toggle('background-fav')

}