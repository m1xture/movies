import { useEffect, useState } from "react";
import axios from "../../axiosConfig";
import css from "./ProducerDetails.module.css";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";

const ProducerDetails = ({ id }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(`/producers/${id}`);
        setData(resp.data.data);
      } catch (err) {
        if (err.status === 429) {
          toast.error("Try later (429)");
        }
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {data.mal_id ? (
        <div className={css["prod-block"]}>
          <div className={css["prod-box"]}>
            <h1 className={css.prod__title}>{data.titles[0].title}</h1>
            <p className={css.prod__subtext}>
              {new Date(data.established).getFullYear()}
            </p>
            <p className={css.prod__text}>{data.about}</p>
          </div>
          <img
            src={data.images.jpg.image_url}
            alt={data.titles[0].title}
            className={css.prod__img}
          />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
export default ProducerDetails;
