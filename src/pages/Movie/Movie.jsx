import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import MovieDetails from "../../components/MovieDetails/MovieDetails";

const Movie = () => {
  const { id } = useParams();
  return (
    <>
      <Header />
      <section>
        <div className="container">
          <MovieDetails id={id} />
        </div>
      </section>
    </>
  );
};

export default Movie;
