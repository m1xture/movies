import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import css from "./Favs.module.css";
import RecomendationsItem from "../../components/RecomendationsItem/RecomendationsItem";

const Favs = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("favs")) {
      setData(JSON.parse(localStorage.getItem("favs")));
    }
  }, []);
  return (
    <>
      <Header />
      <section className={css.favs}>
        <div className="container" data-favs-container>
          <h1 className={css.favs__title}>Favourites</h1>
          <h2 className={css.favs__subtitle}>
            All your favorite movies are collected here
          </h2>
          <ul className={css.favs__list}>
            {data.map((movie) => (
              <RecomendationsItem
                key={movie.mal_id}
                id={movie.mal_id}
                title={movie.title}
                icon={movie.icon}
                score={movie.score}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Favs;
