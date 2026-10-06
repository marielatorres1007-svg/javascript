let numbers = [1, 2, 3, 4, 5];

let animatedmovies = [{
    movie_name: "El viaje de Chihiro",
    movie_year: 1991,
    movie_country: "Japon",
    movie_description: "Una nina entra en un mundo espiritual donde debe encontrar la forma de regresar con sus padres.",
    id: 1
}, {
    movie_name: "Toy Story",
    movie_year: 1995,
    movie_country: "Estados Unidos",
    movie_description: "Un grupo de juguetes cobra vida cuando los humanos no estan presentes y vive diversas aventuras.",
    id: 2
}, {
    movie_name: "El gigante de hierro",
    movie_year: 1999,
    movie_country: "Estados Unidos",
    movie_description: "Un niño descubre un enorme robot de origen desconocido y desarrolla una amistad con él.",
    id: 3
}, {
    movie_name: "Mi vecino Totoro",
    movie_year: 1988,
    movie_country: "Japon",
    movie_description: "Dos hermanas se mudan al campo y conocen a unas criaturas magicas que habitan el bosque.",
    id: 4
}, {
    movie_name: "Coraline",
    movie_year: 2009,
    movie_country: "Estados Unidos",
    movie_description: "Una nina descubre una misteriosa version alternativa de su hogar que esconde un peligroso secreto.",
    id: 5
}];

/*
//Elemento nuevo
let newMovie = {
    movie_name: "El extraño mundo de Jack",
    movie_year: 1993,
    movie_country: "Estados Unidos",
    movie_description: "El rey de las calabazas en el pueblo de las brujas planea secuestrar a Santa Claus."
};

//Preguntar si ya existe ese elemento
let exists = false;
animatedmovies.forEach(function(movie) {
    if (movie.movie_name === newMovie.movie_name) {
        exists = true;
    }
});

//Aregar elemento
if (!exists) {
    animatedmovies.push(newMovie);
}
console.log(animatedmovies);

//Filtrar elementos con FILTER
let japaneseMovies = animatedmovies.filter(function(movie) {
    return movie.movie_country === "Japon";
});

console.log(japaneseMovies);
*/

//CRUD

//Create
function createMovie(newMovie){
 animatedmovies.push(newMovie);
 console.log(animatedmovies)
}

createMovie({
    movie_name: "El extraño mundo de Jack",
    movie_year: 1993,
    movie_country: "Estados Unidos",
    movie_description: "El rey de las calabazas en el pueblo de las brujas planea secuestrar a Santa Claus.",
    id: 6
})

//Read
function readMovies(name){
    let japaneseMovies = animatedmovies.filter(function(movie) {
    return movie.movie_name.includes(name);
})
console.log(japaneseMovies)
}
readMovies("Toy Story")

//Uptdate
function uptdateMovie(id, name, year, country, description){
    let position = animatedmovies.findIndex(movie => movie.id === id)
    console.log(position)
    animatedmovies[position] = {
    movie_name: name,
    movie_year: year,
    movie_country: country,
    movie_description: description,
    id: id
}
console.log(animatedmovies)
}
uptdateMovie(1,"El viaje de Chihiro", 2001, "Japon", "Una nina entra en un mundo espiritual donde debe encontrar la forma de regresar con sus padres.")

//Delete
function deleteMovie(id){
 let newAnimatedMovies = animatedmovies.filter(function(movie) {
    return movie.id != id;
})
animatedmovies = newAnimatedMovies
console.log (newAnimatedMovies)
}
deleteMovie(2)