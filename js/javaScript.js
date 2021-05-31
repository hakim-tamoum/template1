/* global console, alert, prompt */

/*
var motPass = prompt('ecrire le mot pass :');

if (motPass !== "hakim18") {
    document.getElementById('hakim').innerHTML = 
        "le mot pass " + motPass + " n'est pas correct";
}
*/
// select landing page element
let landingPage = document.querySelector(".slider");

// get array of imgs
let imgsArray = ["ecran1.jpg","ecran2.jpg","ecran3.jpg","ecran4.jpg"];

setInterval(function() { //setInterval(() => { 
    //get random number الرقم العشوائي
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

    //change background image url
    landingPage.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] + '")';
}, 3000);