"use strict";

var answers = document.querySelectorAll('#answer');
var arrow = document.getElementById('arrow');

function showAnswer() {
  console.log('clicked');
  answers.forEach(function (answer) {
    var style = window.getComputedStyle(answer);

    if (style.visibility === "hidden") {
      answer.style.visibility = 'visible';
      answer.style.height = '60px';
      arrow.style.transform = 'rotate(180deg)';
      arrow.style.transition = 'transform 0.2s ease';
    } else if (style.visibility === "visible") {
      answer.style.visibility = 'hidden';
      answer.style.height = "0px";
      arrow.style.transform = 'rotate(0deg)';
    }
  });
}

arrow.addEventListener('click', showAnswer);