import React, { useState } from "react";
import Movie from "../Movie/Movie";
import "./MovieList.css";

type Props = {};

const MovieList = (props: Props) => {
  const [movies, setMovies] = useState<any>([
    {
      title: "The Matrix",
      year: 1999,
      poster:
        "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L.jpg",
    },
    {
      title: "The Matrix Reloaded",
      year: 2003,
      poster:
        "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L.jpg",
    },
    {
      title: "The Matrix Revolutions",
      year: 2003,
      poster:
        "https://images-na.ssl-images-amazon.com/images/I/51EG732BV3L.jpg",
    },
  ]);
  return (
    <div className="MovieList">
      {movies.map((movie: any) => {
        return (
          <Movie movie={movie} />
        );
      })}
    </div>
  );
};

export default MovieList;
