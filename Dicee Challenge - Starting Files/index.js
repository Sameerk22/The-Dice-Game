//alert("Working"); //to check if js file connected to index.html

var random_num1 = Math.floor(Math.random() * 6) + 1; //1-6
var rand_dicImg1 = "images/dice" + random_num1 + ".png"; //dice1.png to dice6.png
var dice1 = document.querySelectorAll("img")[0]; //getting img tag
dice1.setAttribute("src", rand_dicImg1); //changing src attribute

var random_num2 = Math.floor(Math.random() * 6) + 1;
var rand_dicImg2 = "images/dice" + random_num2 + ".png";
var dice2 = document.querySelectorAll("img")[1];
dice2.setAttribute("src", rand_dicImg2);

if (random_num1 > random_num2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (random_num2 > random_num1) {
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
