import { NavLink } from "react-router-dom";
// import css from "./Header.module.css"

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Recommended</NavLink>
          <NavLink to="/favs">Favourites</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
