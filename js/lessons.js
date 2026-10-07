/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

"use strict";

// Код возьмите из предыдущего домашнего задания

// const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "100");
// if (numberOfFilms < 10) {
//   alert("Просмотрено довольно мало фильмов");
// } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
//   alert("Вы - классический зритель");
// } else {
//   alert("ВЫ КИНОМАН!");
// }

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// // const a = prompt("Один их последних просмотренных фильмов", "logan");
// // const b = prompt("На сколько вы его оцените?", "9.9");
// // const c = prompt("Один их последних просмотренных фильмов", "DC");
// // const d = prompt("На сколько вы его оцените?", "6.9");

// // personalMovieDB.movies[a] = b;
// // personalMovieDB.movies[c] = d;

// for (let i = 0; i < 2; i++) {
//   for (let j = 0; j < 2; j++) {
//     let a = prompt(`Один их последних просмотренных фильмов`, `logan ${++i}`);
//     let b = prompt("На сколько вы его оцените?", `9.${i}`);
//     if (
//       a != " " &&
//       a != null &&
//       a.length < 50 &&
//       b != " " &&
//       b != null &&
//       b.length < 50
//     ) {
//       alert("СПАСИБО!");
//       personalMovieDB.movies[a] = b;
//       //   console.log(`TRUE I ${i}`);
//       //   console.log(`TRUE J ${j}`);
//     } else {
//       alert("Отвечайте на вопросы честно, пожалуйста!");
//       //   console.log(`FALSE i ${i}`);
//       //   console.log(`FALSE J ${j}`);
//       --j;
//     }
//   }
// }

// console.log(personalMovieDB);

let film = document.querySelectorAll("#film");

film.forEach(function (ask) {
  ask.addEventListener("click", askFilms);
});

function askFilms() {
  const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "100");
  if (numberOfFilms < 10) {
    alert("Просмотрено довольно мало фильмов");
  } else if (numberOfFilms >= 10 && numberOfFilms < 30) {
    alert("Вы - классический зритель");
  } else {
    alert("ВЫ КИНОМАН!");
  }

  const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
  };

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      let a = prompt(`Один их последних просмотренных фильмов`, `logan ${++i}`);
      let b = prompt("На сколько вы его оцените?", `9.${i}`);
      if (
        a != " " &&
        a != null &&
        a.length < 50 &&
        b != " " &&
        b != null &&
        b.length < 50
      ) {
        alert("СПАСИБО!");
        personalMovieDB.movies[a] = b;
      } else {
        alert("Отвечайте на вопросы честно, пожалуйста!");

        --j;
      }
    }
  }

  console.log(personalMovieDB);
}
