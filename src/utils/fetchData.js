import axios from "../axiosConfig";
import { toast } from "react-toastify";

const fetchData = async (page) => {
  try {
    const limit = 12;
    const type = "tv";
    const data = await axios.get(
      `/top/anime?type=${type}&rating=pg13&page=${page}&limit=${limit}`
    );
    data.data.data = data.data.data.reduce((acc, movie) => {
      const index = acc.findIndex((mov) => mov.mal_id === movie.mal_id);
      if (index === -1) {
        acc.push(movie);
      }
      return acc;
    }, []);
    return data;
  } catch (err) {
    if (err.status === 429) {
      toast.error("429 Try later");
    }
    return { data: { data: [] } };
  }
};

export default fetchData;
