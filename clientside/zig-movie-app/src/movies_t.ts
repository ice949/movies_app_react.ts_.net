export interface Movie {
    id: number;
    title: string;
    year: number;
    rating: number;
    director: string;
    description: string;
    poster: string;
    genres: string[];
    reviews: string[];
}