import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie";
import "./MovieList.css";
import { getMovies } from "../../api";

interface Props {};

const MovieList = (props: Props) => {

  const [movies, setMovies] = useState<any>([
    {
      title: "The Matrix",
      year: 1999,
      poster:
        "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L.jpg",
      id: 1,
    },
    {
      title: "The Matrix Reloaded",
      year: 2003,
      poster:
        "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L.jpg",
      id: 2,
    },
    {
      title: "The Matrix Revolutions",
      year: 2003,
      poster:
        "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L.jpg",
      id: 3,
    },
  ]);

  useEffect(() => {
    getMovies().then((movies) => {
      console.log(movies);
      setMovies(movies.results);
    });
  }, []);

  return (
    <div className="MovieList">
      {movies.map((movie: any) => {
        return (
          <Movie movie={movie} key={movie.id} />
        );
      })}
    </div>
  );
};

export default MovieList;
