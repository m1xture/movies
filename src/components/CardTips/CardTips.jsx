import css from "./CardTips.module.css";

const CardTips = ({ id, x, y }) => {
  return (
    <ul className={css.tips} style={{ top: y, left: x }} data-card-tips={true}>
      <li className={css.tips__item}>
        <p className={css.tips__text}>Add to favorites</p>
      </li>
      <li className={css.tips__item}>
        <p className={css.tips__text}>Show reviews</p>
      </li>
    </ul>
  );
};

export default CardTips;
