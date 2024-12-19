import { Suspense, useEffect, useState } from "react";
import axios from "../../axiosConfig";

const ProducerDetails = ({ id }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(`/producers/${id}`);
      setData(resp.data.data);
    };
    fetchData();
  }, []);
  return (
    <>
      {data.mal_id && (
        <div>
          <img src={data.images.jpg.image_url} />
          <h1>{data.titles[0].title}</h1>
          <p>{new Date(data.established).getFullYear()}</p>
          <p>{data.about}</p>
        </div>
      )}
    </>
  );
};
export default ProducerDetails;
