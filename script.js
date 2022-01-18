'use strict';

let nomberOfFilms;

function start() {
    nomberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');

    while (nomberOfFilms == '' || nomberOfFilms == null || isNaN(nomberOfFilms)) {
        nomberOfFilms = +prompt('сколько фильмов вы уже посмотрели?', '');
    }
}

start();


const personalMovieDB = {
    count: nomberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};





function rememberMyFilms() {
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
}

rememberMyFilms();


function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log('просмотренно слишком мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("вы классный зритель!");
    } else if (personalMovieDB.count >= 30) {
        console.log("вы киноман!");
    } else {
        console.log("Произлоша ошибка:((((");
    }
    
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
       console.log(personalMovieDB); 
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш дюбимый жанр под номером ${i}`);
    }
}

writeYourGenres();