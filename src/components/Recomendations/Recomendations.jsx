import { useEffect, useState, useCallback, useRef } from "react";
import RecomendationsItem from "../RecomendationsItem/RecomendationsItem.jsx";
import fetchData from "../../utils/fetchData.js";
import axios from "../../axiosConfig.js";
import css from "./Recomendations.module.css";
import CardTips from "../CardTips/CardTips.jsx";

const Recomendations = () => {
  const [data, setData] = useState([]);
  const [focusedOn, setFocusedOn] = useState({});
  const [page, setPage] = useState(1);
  const handleOutsideClick = useCallback((e) => {
    if (!e.target.dataset.cardTips) {
      setFocusedOn({});
      return document.removeEventListener("click", handleOutsideClick);
    }
  });
  const handleScroll = useCallback((e) => {
    document.removeEventListener("scroll", handleScroll);
    document
      .querySelector("[data-card-tips]")
      ?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 250 });
    setTimeout(() => {
      setFocusedOn({});
    }, 230);
  });
  const handleRightCardMouseClick = useCallback((e) => {
    if (e.target.nodeName !== "UL") {
      e.preventDefault();
      document.addEventListener("click", handleOutsideClick);
      document.addEventListener("scroll", handleScroll);
      return setFocusedOn({
        id:
          e.target.nodeName === "LI" ? e.target.id : e.target.closest("li").id,
        x: e.clientX,
        y: e.clientY,
      });
    }
  });
  const handleViewMore = useCallback(() => {
    setPage(page + 1);
  });
  const options = {
    root: null,
    rootMargin: "50px",
    threshold: 0,
  };

  const list = useRef();
  const targetElem = useRef();
  // let targetElem = list.current?.children[list.current?.children.length - 1];
  // useEffect(() => {

  // }, []);
  const callbackFn = useCallback((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        try {
          setPage((prevPage) => prevPage + 1);
          console.log("intersecting");
        } catch (err) {
          console.log(err);
        }
      }
    });
  });
  useEffect(() => {
    async function getData() {
      const newData = await fetchData(page);
      setData(data ? [...data, ...newData.data.data] : newData.data.data);
      if (page === 1 && targetElem.current) {
        const observer = new IntersectionObserver(callbackFn, options);
        observer.observe(targetElem.current);
      }
    }
    console.log("alalalal");
    getData();
  }, [page]);

  return (
    <>
      <ul
        className={css.recomendations__list}
        onContextMenu={handleRightCardMouseClick}
        ref={list}
      >
        {data[0] &&
          data.map((movie, index) => (
            <RecomendationsItem
              key={movie.mal_id}
              title={movie.title_english ? movie.title_english : movie.title}
              icon={movie.images.webp.image_url}
              score={movie.score ? movie.score : 0}
              id={movie.mal_id}
            />
          ))}
      </ul>
      <button onClick={handleViewMore} ref={targetElem}>
        View more
      </button>
      {focusedOn.id && (
        <CardTips id={focusedOn.id} x={focusedOn.x} y={focusedOn.y} />
      )}
    </>
  );
};

export default Recomendations;
