import fetch from 'node-fetch'
const BASE_URL = 'https://yts.am/api/v2/'
const API_URL = `${BASE_URL}list_movies.json?`

const getMovies = (limit, rating) => {
    // 여기에서 return이 없으면
    // 'cannot return null for non-nullable...' 에러가 뜬다.
    let REQUEST_URL = API_URL;
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

export default getMovies;