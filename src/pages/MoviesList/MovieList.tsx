import { useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import MovieDetail from "../../components/MovieDetail/MovieDetail";
import { MovieInfo } from "../../models/MovieInfo.interface";
import { mockFilms } from "./mockFilms";
import { MovieListContainer } from "./MovieListStyle";

const MovieList = () => {
  const [filmToSee, setFilmToSee] = useState<MovieInfo | undefined>();

  return (
    <MovieListContainer>
      {mockFilms(9).map((film) => (
        <MovieCard key={film.id} film={film} seeDetail={setFilmToSee} />
      ))}

      <MovieDetail
        isOpen={filmToSee !== undefined}
        closeModal={() => setFilmToSee(undefined)}
        film={filmToSee}
      />
    </MovieListContainer>
  );
};

export default MovieList;
