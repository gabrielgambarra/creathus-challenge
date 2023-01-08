import { useCallback, useEffect, useReducer, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import MovieDetail from "../../components/MovieDetail/MovieDetail";
import { MovieInfo } from "../../models/MovieInfo.interface";
import api from "../../utils/api";
import { MovieListContainer, MoviesPagination } from "./MovieListStyle";
import { initialMovieListState, reducer } from "./reducer";

const MovieList = () => {
  const [{ movies, next, previous }, setState] = useReducer(
    reducer,
    initialMovieListState
  );
  const [filmToSee, setFilmToSee] = useState<MovieInfo | undefined>();

  useEffect(() => {
    getAllMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAllMovies = useCallback(async (page?: number) => {
    try {
      const { data } = await api.get("/movies", {
        params: { page },
      });
      setState({
        movies: data.data,
        next: data.next,
        previous: data.previous,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <MoviesPagination>
        <button
          onClick={() => getAllMovies(previous?.page)}
          disabled={!previous}
        >
          Previus
        </button>
        <button onClick={() => getAllMovies(next?.page)} disabled={!next}>
          Next
        </button>
      </MoviesPagination>
      <MovieListContainer>
        {movies &&
          movies.map((film) => (
            <MovieCard key={film.id} film={film} seeDetail={setFilmToSee} />
          ))}

        <MovieDetail
          isOpen={filmToSee !== undefined}
          closeModal={() => setFilmToSee(undefined)}
          film={filmToSee}
        />
      </MovieListContainer>
    </>
  );
};

export default MovieList;
