'use strict';

const nomberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: nomberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};



for (let i = 0; i < 2; i++) {
    const a = prompt('один из последних просмотренных фильмов?', ''),
          b = prompt('на сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }

         
}

if (personalMovieDB.count < 10){
    console.log('просмотренно слишком мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("вы классный зритель!");
} else if (personalMovieDB.count >= 30) {
    console.log("вы киноман!");
} else {
    console.log("Произлоша ошибка:((((");
}

console.log(personalMovieDB); 