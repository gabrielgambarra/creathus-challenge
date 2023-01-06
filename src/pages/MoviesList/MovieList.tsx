import MovieCard from "../../components/MovieCard/MovieCard";
import { mockFilms } from "./mockFilms";
import { MovieListContainer } from "./MovieListStyle";

const MovieList = () => {
  return (
    <MovieListContainer>
      {mockFilms(9).map((film) => (
        <MovieCard key={film.id} film={film} />
      ))}
    </MovieListContainer>
  );
};

export default MovieList;
