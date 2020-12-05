import fetch from 'node-fetch'
const BASE_URL = 'https://yts.am/api/v2/'
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`
const MOVIE_DETAIL_URL = `${BASE_URL}movie_details.json`
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`

export const getMovies = (limit, rating) => {
    // 여기에서 return이 없으면
    // 'cannot return null for non-nullable...' 에러가 뜬다.
    let REQUEST_URL = `${LIST_MOVIES_URL}?`;
    if (limit > 0) {
        REQUEST_URL += `limit=${limit}`
    }
    if (rating > 0) {
        REQUEST_URL += `&minimum_rating=${rating}`
    }
    return fetch(REQUEST_URL)
        .then(res => res.json())
        .then(json => json.data.movies);
}

export const getMovie = (id) => {
    return fetch(`${MOVIE_DETAIL_URL}?movie_id=${id}`)
        .then(res => res.json())
        .then(json => json.data.movie);
}

export const getSuggestions = (id) => {
    return fetch(`${MOVIE_SUGGESTIONS_URL}?movie_id=${id}`)
        .then(res => res.json())
        .then(json => json.data.movies);
}