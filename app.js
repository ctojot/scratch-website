'use strict';

const usersAnswer = prompt("Have you watched anime?");
console.log(usersAnswer);

if(usersAnswer == "yes"){
    document.write("Sweet! Glad to have you here!\n");
} else if (usersAnswer == "Yes"){
    document.write("Sweet! Glad to have you here!\n");
} if (usersAnswer == "no"){
    document.write("Thats okay! Glad to have you here!\n");
} if (usersAnswer == "No"){
    document.write("Thats okay! Glad to have you here!\n");
}

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
document.write("<br>");
document.write(new Date());