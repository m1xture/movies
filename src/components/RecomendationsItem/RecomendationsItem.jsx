import css from "./RecomendationsItem.module.css";
import { NavLink } from "react-router-dom";
import BinIcon from "../../imgs/icons/bin.svg";
import { useCallback, useRef } from "react";
import { toast } from "react-toastify";

const RecomendationsItem = ({
  title,
  icon,
  score,
  id,
  isFavourite,
  handleDelete,
}) => {
  return (
    <li className={css.recomendations__item} id={id}>
      <NavLink to={`/movies/${id}`}>
        <div className={css["recomendations-wrapper"]}>
          <img
            className={css.recomendations__img}
            src={icon}
            alt={title + " preview art"}
          />
        </div>
        <div className={css["recomendation__item-box"]}>
          <h3 className={css.recomendations__subtitle}>{title}</h3>
          {isFavourite && (
            <button
              className={css["recomendations__bin-bg"]}
              type="button"
              onClick={handleDelete}
            >
              <img
                className={css.recomendations__bin}
                src={BinIcon}
                alt="bin icon"
              />
            </button>
          )}
          <p className={css.recomendations__score}>{score?.toFixed(1)}</p>
        </div>
      </NavLink>
    </li>
  );
};

export default RecomendationsItem;
