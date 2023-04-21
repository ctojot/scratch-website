'use strict';

function getAnswer() {
    const userAnswer = prompt("Have you watched anime before?");

    return userAnswer;
}

function specialMessage(usersAnswer) {
    while (answer.toLowerCase() != 'yes')
        if (usersAnswer == "") {
            usersAnswer = prompt("That's weird. Let's try again. Have you watched anime before?");
        }
        if (usersAnswer == "yes") {
        document.write("Sweet! Glad to have you here!");
         }
        if (usersAnswer == "Yes") {
        document.write("Sweet! Glad to have you here!");
        }
        if (usersAnswer == "no") {
        document.write("Thats okay! Glad to have you here!");
        }
        if (usersAnswer == "No") {
        document.write("Thats okay! Glad to have you here!");
        }
}

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
document.write("<br>");

function rateMyPage(){
    let rating = prompt("How was my website? 1-5? 5 being the best.")

    for (let i = 0; i < rating; i++){
        document.write("<img src='spongebob.png' alt='spogebob with his hand in his wallet'/>")
    }
}