import css from "./CardTips.module.css";
import addToFavourites from "../../utils/addToFavourites";
import { useCallback } from "react";
import { toast } from "react-toastify";

const CardTips = ({ id, title, icon, score, x, y }) => {
  const handleFavourite = useCallback(async () => {
    if (localStorage.getItem("favs")) {
      const currentFavourites = JSON.parse(localStorage.getItem("favs"));
      const isAdded = currentFavourites.some(
        (movie) => String(movie.mal_id) === id
      );
      if (isAdded) {
        return toast.error("This movie has already been added to favourites", {
          icon: "🚀",
        });
      }
    }
    addToFavourites({ mal_id: id, title, score, icon });
    toast.success("Added successfully");
  });
  return (
    <ul className={css.tips} style={{ top: y, left: x }} data-card-tips={true}>
      <li className={css.tips__item} onClick={handleFavourite}>
        <p className={css.tips__text}>Add to favorites</p>
      </li>
      <li className={css.tips__item}>
        <p className={css.tips__text}>Show reviews</p>
      </li>
    </ul>
  );
};

export default CardTips;
