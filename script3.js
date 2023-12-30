"use strict";
let Num = Math.trunc(Math.random() * 30) + 1;
console.log(Num);

let score = 5;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const x = Number(document.querySelector(".guess").value);
  console.log(x);
  if (!x) {
    document.querySelector(".message").textContent =
      "🚫 Please enter the input";
  } else if (x == Num) {
    document.querySelector(".message").textContent = "🎉 Correct Guess";
    // document.querySelector(".hscore").textContent = score;
    document.querySelector(".number").textContent = x;
    document.querySelector("body").style.backgroundColor = "#0BDA51";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".hscore").textContent = highscore;
    }
  } else if (x > 20) {
    document.querySelector(".message").textContent = "❌ Enter a valid number";
   } else if(x!= Num){
    if (score > 1) {
      document.querySelector(".message").textContent = x>Num ? "🔺 Number too High" : "🔻 Number too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#F40009";
      document.querySelector(".message").textContent = "😭 You Lose!";
    }
   }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 5;
  Num = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start Guessing Number";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").textContent = ' ';
  document.querySelector("body").style.backgroundColor = "rgb(88, 152, 255)";
  document.querySelector(".number").style.width = "15rem";
});
