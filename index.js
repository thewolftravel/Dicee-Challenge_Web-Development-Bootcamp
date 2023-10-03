let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

var player1 = "./images/dice" + randomNumber1 + ".png";
var player2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", player1);
document.querySelector(".img2").setAttribute("src", player2);
