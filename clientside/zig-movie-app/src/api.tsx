import axios from "axios";
import { Movie } from "./movies_t";

interface MoviesResponse {
    movies: Movie[];

}

export const getMovies = async () => {
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmI0ZDliNTEyZjRiOTA3MmNmMGQ1ZTE2YjgyMjllNCIsInN1YiI6IjY1YTMzNGM2MjY2Nzc4MDEyYjY0MzdiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pi0_qfwt4448vxIWjg_YctvxJtA83L8EyHeheIKQqKQ',
        },
    };
    try {
        const response = await axios.request<MoviesResponse>(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}