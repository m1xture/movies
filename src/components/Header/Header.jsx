import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <nav className={css.header__nav}>
          <NavLink to="/" className={css.header__link}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.header__link}>
            Recommended
          </NavLink>
          <NavLink to="/favs" className={css.header__link}>
            Favourites
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
