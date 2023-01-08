import { Reducer } from "react";
import { MovieInfo } from "../../models/MovieInfo.interface";
import { Nextprevious } from "../../models/MoviesResponse.interface";

interface MovieListState {
  movies: MovieInfo[];
  next?: Nextprevious;
  previous?: Nextprevious;
}

export const initialMovieListState: MovieListState = {
  movies: [],
  next: undefined,
  previous: undefined,
};

export const reducer: Reducer<MovieListState, Partial<MovieListState>> = (
  state,
  changes
) => ({
  ...state,
  ...changes,
});
