import axios from "../axiosConfig";
import { toast } from "react-toastify";

const searchMovies = async (page, q) => {
  try {
    const data = await axios.get(
      `/anime?unapproved=false&page=${page}&limit=${12}&sfw=${true}&q=${q}`
    );
    return data;
  } catch (err) {
    if (err.status === 429) {
      toast.error("429 Try later");
    }
    return { data: { data: [] } };
  }
};

export default searchMovies;
