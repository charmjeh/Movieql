import {
    movies,
    getById,
    addMovie,
    deleteMovie
} from './db';

const resolvers = {
    Query: {
        movies: () => movies,
        movie: (_, {
            id
        }) => getById(id)
    },
    Mutation: {
        addMovie: (_, {
            title,
            year,
            rating,
            synopsis,
            genres
        }) => addMovie(
            title,
            year,
            rating,
            synopsis,
            genres
        ),
        deleteMovie: (_, {
            id
        }) => deleteMovie(id)
    }
}

export default resolvers;