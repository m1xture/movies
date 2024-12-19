import axios from "../axiosConfig";

const fetchData = async (page) => {
  const limit = 12;
  const type = "tv";
  const data = await axios.get(
    `/top/anime?type=${type}&rating=pg13&page=${page}&limit=${limit}`
  );
  return data;
};

export default fetchData;
