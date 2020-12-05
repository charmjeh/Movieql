export let movies = [
    {
        id: 0,
        title: 'Her',
        year: 2013,
        rating: 18,
        synopsis: 'In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.',
        genres: ['drama', 'romance', 'sci-fi']
    },
    {
        id: 0,
        title: 'Her',
        year: 2013,
        rating: 9.0,
        synopsis: 'In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.',
        genres: ['drama', 'romance', 'sci-fi']
    },
    {
        id: 1,
        title: 'Your Name',
        year: 2016,
        rating: 8.4,
        synopsis: 'Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?',
        genres: ['animation', 'drama', 'romance']
    },
    {
        id: 2,
        title: 'COCO',
        year: 2017,
        rating: 18,
        synopsis: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
        genres: ['animation', 'fantasy', 'music']
    },
]

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id)
    return filteredMovie[0];
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id)
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies
        return true;
    } else {
        return false;
    }
}

export const addMovie = (
    title,
    year,
    rating,
    synopsis,
    genres,
) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        title,
        year,
        rating,
        synopsis,
        genres
    }
    movies.push(newMovie);
    return newMovie;
}