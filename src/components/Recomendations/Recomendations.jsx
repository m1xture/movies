import { useEffect, useState } from "react";
import RecomendationsItem from "../RecomendationsItem/RecomendationsItem.jsx";
import axios from "../../axiosConfig.js";
import css from "./Recomendations.module.css";

const Recomendations = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        "/anime?order_by=popularity&type=tv&rating=pg13"
      );
      setData(data.data.data);
    }
    fetchData();
  }, []);
  return (
    <ul className={css.recomendations__list}>
      {data[0] &&
        data.map((movie) => (
          <RecomendationsItem
            key={movie.mal_id}
            title={movie.title_english ? movie.title_english : movie.title}
            icon={movie.images.webp.image_url}
            score={movie.score ? movie.score : 0}
            id={movie.mal_id}
          />
        ))}
    </ul>
  );
};

export default Recomendations;
