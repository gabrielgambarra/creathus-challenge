import { MovieCardContainer } from "./MovieCardStyle";

interface MovieInfo {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface MovieCardProps {
  film: MovieInfo;
}

const MovieCard = ({ film }: MovieCardProps) => {
  return (
    <MovieCardContainer>
      <img src={film.image} alt="Movie post" />

      <div>
        <h3>{film.title}</h3>
      </div>
    </MovieCardContainer>
  );
};

export default MovieCard;
