import { useCallback, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import css from "./Favs.module.css";
import clearFavourites from "../../utils/clearFavourites";
import { toast } from "react-toastify";
import deleteFromFavourites from "../../utils/deleteFromFavourites";
import RecomendationsItem from "../../components/RecomendationsItem/RecomendationsItem";

const Favs = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("favs")) {
      setData(JSON.parse(localStorage.getItem("favs")));
    }
  }, []);
  const handleClear = useCallback(() => {
    const res = true;
    if (res) {
      clearFavourites(res);
      setData([]);
      toast.success("Clear favourites");
    }
  });
  const handleDelete = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    const id = e.target.closest("li").id;
    const updatedData = deleteFromFavourites(id);
    setData(updatedData);
    toast.success("Deleted successfully");
  });
  return (
    <>
      <Header />
      <section className={css.favs}>
        <div className="container" data-favs-container>
          <h1 className={css.favs__title}>Favourites</h1>
          <h2 className={css.favs__subtitle}>
            All your favorite movies are collected here
          </h2>
          {data[0] && (
            <button
              type="button"
              className={css.favs__btn}
              onClick={handleClear}
            >
              Clear all
            </button>
          )}
          <ul className={css.favs__list}>
            {data.map((movie) => (
              <RecomendationsItem
                key={movie.mal_id}
                id={movie.mal_id}
                title={movie.title}
                icon={movie.icon}
                score={movie.score}
                isFavourite={true}
                handleDelete={handleDelete}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Favs;
