document.addEventListener('DOMContentLoaded', function () {
    const movieListElement = document.getElementById('movieList');
    const searchInput = document.getElementById('search');
    const yearInput = document.getElementById('year');
    const addMovieForm = document.getElementById('addMovieForm');
    const newTitleInput = document.getElementById('newTitle');
    const newDescriptionInput = document.getElementById('newDescription');
    const newYearInput = document.getElementById('newYear');
    const newImageUrlInput = document.getElementById('newImageUrl');

    let movies = [
        {
            title: 'Titanic',
            description: 'Un drama romántico sobre un naufragio',
            year: 1997,
            imageUrl: 'https://services.meteored.com/img/article/titanic-10-curiosidades-sobre-el-naufragio-mas-famoso-de-la-historia-1681429632845_1280.jpg'
        },
        {
            title: 'Avatar',
            description: 'Ciencia ficción en Pandora',
            year: 2009,
            imageUrl: 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2020/01/hipertextual-arte-conceptual-avatar-2-muestra-nuevos-rincones-pandora-2020623395.jpg?fit=2048%2C1295&quality=50&strip=all&ssl=1'
        },
        {
            title: 'The Shawshank Redemption',
            description: 'Drama carcelario basado en la novela de Stephen King',
            year: 1994,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg'
        },
        {
            title: 'The Godfather',
            description: 'El padrino del cine de mafia',
            year: 1972,
            imageUrl: 'https://cdn.britannica.com/55/188355-050-D5E49258/Salvatore-Corsitto-The-Godfather-Marlon-Brando-Francis.jpg'
        },
        {
            title: 'Inception',
            description: 'Ciencia ficción y sueños dentro de sueños',
            year: 2010,
            imageUrl: 'https://i.ytimg.com/vi/T03XUKBn8UA/maxresdefault.jpg'
        },
        {
            title: 'Forrest Gump',
            description: 'Historia de vida de un hombre con coeficiente intelectual bajo',
            year: 1994,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg'
        },
        {
            title: 'The Matrix',
            description: 'Realidad virtual y rebelión contra las máquinas',
            year: 1999,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg'
        },
        // Puedes agregar más películas aquí
    ];

    function renderMovies(movieArray) {
        movieListElement.innerHTML = '';
        if (movieArray.length === 0) {
            movieListElement.innerHTML = '<p>No se encontraron películas</p>';
        } else {
            movieArray.forEach(movie => {
                const movieContainer = document.createElement('div');
                movieContainer.className = 'movie-container'; // Agregamos una clase para el contenedor
                movieContainer.innerHTML = `
                    <h3>${movie.title}</h3>
                    <div class="image-container" style="background-image: url('${movie.imageUrl}')"></div>
                    <p>${movie.description}</p>
                    <p>Año: ${movie.year}</p>`;
                movieListElement.appendChild(movieContainer);
            });
        }
    }

    function searchMovies(query) {
        query = query.toLowerCase();
        const results = movies.filter(movie => movie.title.toLowerCase().includes(query));
        renderMovies(results);
    }

    function filterMoviesByYear(year) {
        if (year === "") {
            renderMovies(movies);
        } else {
            const results = movies.filter(movie => movie.year === parseInt(year));
            renderMovies(results);
        }
    }
    function addMovie(title, description, year, imageUrl) {
        const newMovie = {
            title: title,
            description: description,
            year: parseInt(year),
            imageUrl: imageUrl
        };
        movies.push(newMovie);
        renderMovies(movies);
    }

    searchInput.addEventListener('input', function () {
        searchMovies(searchInput.value);
    });

    yearInput.addEventListener('input', function () {
        filterMoviesByYear(yearInput.value);
    });

    addMovieForm.addEventListener('submit', function (event) {
        event.preventDefault();
        addMovie(newTitleInput.value, newDescriptionInput.value, newYearInput.value, newImageUrlInput.value);
        addMovieForm.reset();
    });

    renderMovies(movies);
});











