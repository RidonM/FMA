const movieGernes = document.querySelector('.movieGernes');
const movielist = document.querySelector('.movielist');
const movieDetailsPage = document.querySelector('.movie-details-page');

// Dropdown for Genres
let buildGenres = '';
for (let run = 0; run < allMovies.length; run++) {
    buildGenres += `<option value="${run}">${allMovies[run].gerne}</option>`;
}
movieGernes.innerHTML = buildGenres;

function populateMovies(opt) {
    // Populate Movie list based on Genre
    let buildList = '';
    const currentGerne = allMovies[opt.value];

    for (let run = 0; run < currentGerne.movies.length; run++) {
        buildList += `<li class="selected-movie">
            <h4>${currentGerne.movies[run].title}</h4>
            <img src="assets/img/${currentGerne.movies[run].thumb}" alt="${currentGerne.movies[run].title}">
            <p class="description">${currentGerne.movies[run].desc}</p>
            <div class="row movie-stats mrun prun">
                <div class="col mrun prun">Date: <span>${currentGerne.movies[run].date}</span> </div>
                <div class="col mrun prun">Length: <span>${currentGerne.movies[run].length}</span> </div>
            </div>
        </li>`;
    }

    movielist.innerHTML = buildList;
}

movieGernes.addEventListener('change', function () {
    populateMovies(this);
});


// Load Movie Details Page
function loadDetailPage(g, m) {

}

let buildDetailPage = `
    <h1>Plane (2023)</h1>
    <h4>Date: 02-24-2023 | Length: 108min</h4>
    <div class="container">
        <iframe class="responsive-iframe"
            src="https://www.youtube.com/embed/M25zXBIUVr0?si=2_Np20M6IFPMasOu"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
    </div>

    <h4>Gerard Butler, Mike Colter, Tony Goldwyn, Yoson An</h4>
    <p>On an initially routine flight, the protagonist ends up saving passengers through an
        emergency landing following a lightning strike.</p>
    `;

movieDetailsPage = buildDetailPage;