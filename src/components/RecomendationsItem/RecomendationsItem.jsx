import css from "./RecomendationsItem.module.css";
import { NavLink } from "react-router-dom";

const RecomendationsItem = ({ title, icon, score, id }) => {
  return (
   
      <li
        className={css.recomendations__item}
        id={id}
      >
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
            <p className={css.recomendations__score}>{score.toFixed(1)}</p>
          </div>
        </NavLink>
      </li>
  );
};

export default RecomendationsItem;
