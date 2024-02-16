let movies = [
    {
        name: 'The Godfather',
        releaseYear: 1972,
        rating: 9.2,
        mainActors: ['Marlon Brando', 'Al Pacino', 'James Caan']
    },
    {
        name: 'The Shawshank Redemption',
        releaseYear: 1994,
        rating: 9.3,
        mainActors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton']
    },
    {
        name: 'Pulp Fiction',
        releaseYear: 1994,
        rating: 8.9,
        mainActors: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson']
    },
    {
        name: 'The Dark Knight',
        releaseYear: 2008,
        rating: 9.0,
        mainActors: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart']
    },
    {
        name: 'Forrest Gump',
        releaseYear: 1994,
        rating: 8.8,
        mainActors: ['Tom Hanks', 'Robin Wright', 'Gary Sinise']
    }
];


const body = document.body;

movies.sort((a, b) => {
    return b.rating - a.rating;
});


movies.forEach(movie => {
    let movieDetails = document.createElement('div');

    movieDetails.innerHTML = `<h2>${movie.name}</h2>
    <p>Release Year: ${movie.releaseYear}</p>
    <p>Rating: ${movie.rating}</p>
    <p>Main Actors: ${movie.mainActors}</p>`;

    body.appendChild(movieDetails);
});

