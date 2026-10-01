const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "100");
console.log(numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  geners: [],
  privat: false,
};
const lastFilmName1 = prompt(
  "Один из последних просмотренных фильмов?",
  "Logan",
);
const lastFilmRating1 = prompt("На сколько оцените его?", "10");
const lastFilmName2 = prompt(
  "Один из последних просмотренных фильмов?",
  "Super-Man",
);
const lastFilmRating2 = prompt("На сколько оцените его?", "0");

personalMovieDB.movies[lastFilmName1] = lastFilmRating1;
personalMovieDB.movies[lastFilmName2] = lastFilmRating2;

console.log(personalMovieDB);
