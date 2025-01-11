import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";

const Header = ({ isRecs, value, setValue }) => {
  // useEffect(() => {}, [debouncedValue]);

  const cb = (e) => {
    e.preventDefault();
    const newValue =
      e.currentTarget.nodeName === "FORM"
        ? e.currentTarget.title.value.trim()
        : e.currentTarget.value.trim();
    // console.log(newValue);
    // if (
    //   value.toLowerCase() === newValue.toLowerCase() ||
    //   (newValue.length <= 2 && newValue !== "")
    // )
    //   return;
    setValue(newValue);
  };

  return (
    <header className={css.header}>
      <div className="container" data-header-container>
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
        {isRecs && (
          <form className={css.header__form} onSubmit={cb}>
            <input
              className={css.header__input}
              placeholder="Search title"
              name="title"
              autoComplete="off"
              value={value}
              onChange={cb}
            />
          </form>
        )}
      </div>
    </header>
  );
};

export default Header;
