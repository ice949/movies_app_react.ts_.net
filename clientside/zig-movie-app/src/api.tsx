import axios from "axios";
import { Movie } from "./movies_t";

interface MoviesResponse {
    movies: Movie[];

}

export const getMovies = async () => {
    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/popular',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${process.env.REACT_APP_AUTH_KEY}`
        },
    };
    try {
        const response = await axios.request<MoviesResponse>(options);
        console.log(process.env.REACT_APP_AUTH_KEY);
        return response.data;

    } catch (error) {
        console.error(error);
    }
}