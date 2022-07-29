const BASE_URL = "https://api.themoviedb.org/3";
const BASE_KEY = "8c2f1cd8692a539e3bea9ae95f68229a";
export const BASE_IMG = "https://image.tmdb.org/t/p/original";

async function FetchWithErrorHandling( url = "", config = {} ) {
    const response = await fetch(url, config);
    return response.ok 
    ? await response.json()
    : Promise.reject(new Error("Not found"))
}

export function fetchTrendingMovies() {
    return FetchWithErrorHandling(`${BASE_URL}/trending/all/day?api_key=${BASE_KEY}`);
};

export function fetchMoviesBySearch(query) {
    return FetchWithErrorHandling(`${BASE_URL}/search/movie?api_key=${BASE_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
};

export function fetchMovieById(movieId) {
    return FetchWithErrorHandling(`${BASE_URL}/movie/${movieId}?api_key=${BASE_KEY}&language=en-US`)
}

export function fetchCreditsById(movieId) {
    return FetchWithErrorHandling(`${BASE_URL}/movie/${movieId}/credits?api_key=${BASE_KEY}&language=en-US`)
}

export function fetchReviewsById(movieId) {
    return FetchWithErrorHandling(`${BASE_URL}/movie/${movieId}/reviews?api_key=${BASE_KEY}&language=en-US&page=1`)
}