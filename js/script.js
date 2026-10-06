let numbers = [1, 2, 3, 4, 5];

let animatedmovies = [{
    movie_name: "El viaje de Chihiro",
    movie_year: 2001,
    movie_country: "Japon",
    movie_description: "Una nina entra en un mundo espiritual donde debe encontrar la forma de regresar con sus padres."
}, {
    movie_name: "Toy Story",
    movie_year: 1995,
    movie_country: "Estados Unidos",
    movie_description: "Un grupo de juguetes cobra vida cuando los humanos no estan presentes y vive diversas aventuras."
}, {
    movie_name: "El gigante de hierro",
    movie_year: 1999,
    movie_country: "Estados Unidos",
    movie_description: "Un niño descubre un enorme robot de origen desconocido y desarrolla una amistad con él."
}, {
    movie_name: "Mi vecino Totoro",
    movie_year: 1988,
    movie_country: "Japon",
    movie_description: "Dos hermanas se mudan al campo y conocen a unas criaturas magicas que habitan el bosque."
}, {
    movie_name: "Coraline",
    movie_year: 2009,
    movie_country: "Estados Unidos",
    movie_description: "Una nina descubre una misteriosa version alternativa de su hogar que esconde un peligroso secreto."
}];

let newMovie = {
    movie_name: "El extraño mundo de Jack",
    movie_year: 1993,
    movie_country: "Estados Unidos",
    movie_description: "El rey de las calabazas en el pueblo de las brujas planea secuestrar a Santa Claus."
};

let exists = false;
animatedmovies.forEach(function(movie) {
    if (movie.movie_name === newMovie.movie_name) {
        exists = true;
    }
});

if (!exists) {
    animatedmovies.push(newMovie);
}
console.log(animatedmovies);

let japaneseMovies = animatedmovies.filter(function(movie) {
    return movie.movie_country === "Japon";
});

console.log(japaneseMovies);