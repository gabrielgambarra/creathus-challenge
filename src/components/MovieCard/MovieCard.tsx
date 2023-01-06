import { MovieInfo } from "../../models/MovieInfo.interface";
import { MovieCardContainer } from "./MovieCardStyle";

interface Props {
  film: MovieInfo;
  seeDetail: (film: MovieInfo) => void;
}

const MovieCard = ({ film, seeDetail }: Props) => {
  return (
    <MovieCardContainer onClick={() => seeDetail(film)}>
      <img src={film.image} alt="Movie post" />

      <div>
        <h3>{film.title}</h3>
      </div>
    </MovieCardContainer>
  );
};

export default MovieCard;
