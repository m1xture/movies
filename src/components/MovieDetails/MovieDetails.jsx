import { useEffect, useState } from "react";
import css from "./MovieDetails.module.css";
import axios from "../../axiosConfig";
import { NavLink } from "react-router-dom";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";

const MovieDetails = ({ id }) => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios.get(`/anime/${id}/full`);
        setMovie(data.data.data);
      } catch (err) {
        if (err.status === 429) toast.error("Try later (429)");
      }
    }
    fetchData();
  }, []);
  return (
    <>
      {movie.mal_id ? (
        <>
          <div className={css["details-box"]}>
            <img
              className={css.details__photo}
              src={movie.images.webp.large_image_url}
              alt={movie.title + " large poster"}
            />
            <h1 className={css.details__title}>
              {movie.title_english ? movie.title_english : movie.title}
            </h1>
            {movie.title_english && movie.title_english !== movie.title && (
              <h4 className={css.details__subtitle}>{movie.title}</h4>
            )}
          </div>
          <div className={css["details-block"]}>
            <div className={css.information}>
              <h2 className={css.information__title}>Information</h2>
              <ul className={css.information__list}>
                <li className={css.information__item}>
                  <p className={css.information__text}>
                    Episodes:
                    <span className={css["information__text--accent"]}>
                      {" " + movie.episodes.toString()}
                    </span>
                  </p>
                </li>
                <li className={css.information__item}>
                  <p className={css.information__text}>
                    Episode duration:
                    <span className={css["information__text--accent"]}>
                      {" " + movie.duration.replace("per ep", "")}
                    </span>
                  </p>
                </li>
                <li className={css.information__item}>
                  <p className={css.information__text}>
                    Status:
                    <span className={css["information__text--accent"]}>
                      {" " + movie.status.toLowerCase().replace("airing", "")}
                    </span>
                  </p>
                </li>
                <li className={css.information__item}>
                  <p className={css.information__text}>
                    Genres:{" "}
                    <span className={css["information__text--accent"]}>
                      {movie.genres.length > 0
                        ? movie.genres
                            .map((genre) => genre.name.toLowerCase())
                            .join(", ")
                        : "--"}
                    </span>
                  </p>
                </li>
                <li className={css.information__item}>
                  <p className={css.information__text}>
                    Themes:{" "}
                    <span className={css["information__text--accent"]}>
                      {movie.themes.length > 0
                        ? movie.themes
                            .map((theme) => theme.name.toLowerCase())
                            .join(", ")
                        : "--"}
                    </span>
                  </p>
                </li>
                <li className={css.information__item}>
                  <p className={css.information__text}>
                    Rating:
                    <span className={css["information__text--accent"]}>
                      {" " + movie.rating.toString()}
                    </span>
                  </p>
                </li>
                <li className={css.information__item}>
                  <p className={css.information__text}>
                    Studio:{" "}
                    <NavLink to={`/producers/${movie.studios[0].mal_id}`}>
                      <span
                        className={css["information__text--accent"]}
                        data-studio-name
                      >
                        {movie.studios[0] ? movie.studios[0].name : "--"}
                      </span>
                    </NavLink>
                  </p>
                </li>
              </ul>
            </div>
            <div className={css.score}>
              <h2 className={css.score__title}>Score</h2>
              <p className={css.score__text}>
                {movie.score ? movie.score.toFixed(1) : "0"}/10
              </p>
            </div>
            <div className={css.description}>
              <h2 className={css.description__title}>Description</h2>
              <p className={css.description__desc}>
                {movie.synopsis.slice(0, movie.synopsis.indexOf("["))}
              </p>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};
export default MovieDetails;
