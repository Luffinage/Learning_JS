"use strict";

const user = "Sasha";
alert(`Привет, ${user}! Ты молодец и у тебя всё получится!`);

let bites = document.querySelectorAll(".header__item__1");
const answers = [];

bites.forEach(function (bite) {
  bite.addEventListener("click", clickBite);
});

function clickBite() {
  if (window.confirm("Are you okay?")) {
    alert("Good Job Boy!");
    answers[0] = prompt("Как тебя зовут?", "");
    answers[1] = prompt("Какая твоя фамилия?", "");
    answers[2] = prompt("Сколько тебе лет?", "");
    console.log(answers);
    // document.write("Ты всё удалил!!!. Но вот тебе твои ответы: " + answers);
    document.write(`Ты всё удалил!!!. Но вот тебе твои ответы: ${answers}!`);
    window.close();
  } else {
    alert("Sure?");
    alert("Ты " + answers[0] + " " + answers[1]);
    window.open("index.html", "_blank", "");
    window.close();
  }
}
// window.open("", "_self", "");
// window.close();
