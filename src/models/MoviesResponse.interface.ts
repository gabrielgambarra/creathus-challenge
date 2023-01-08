import { MovieInfo } from "./MovieInfo.interface";

export interface Nextprevious {
  page: number;
  limit: number;
}

export interface MoviesResponse {
  currentCountPerPage: number;
  currentPage: number;
  totalCount: number;
  totalPage: number;
  next?: Nextprevious;
  previus?: Nextprevious;
  data: MovieInfo[];
}
