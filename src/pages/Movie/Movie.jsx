import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import css from "./Movie.module.css";

const Movie = () => {
  const { id } = useParams();
  return (
    <>
      <Header />
      <section className={css.details}>
        <div className="container" data-details-container>
          <MovieDetails id={id} />
        </div>
      </section>
    </>
  );
};

export default Movie;
