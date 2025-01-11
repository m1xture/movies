import Header from "../../components/Header/Header";
import Recomendations from "../../components/Recomendations/Recomendations";
import css from "./Recs.module.css";
import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import { useSearchParams } from "react-router-dom";

const Recs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("q"));
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const debouncedValue = useDebounce(value, 500);
  useEffect(() => {
    if (searchParams.get("q")) {
      setValue(searchParams.get("q"));
    }
  }, []);
  useEffect(() => {
    setPage(1);
    setSearchParams({ q: debouncedValue });
    setData([]);
  }, [debouncedValue]);
  return (
    <>
      <Header isRecs={true} value={value} setValue={setValue} />
      <section className={css.recs}>
        <div className="container">
          <Recomendations
            data={data}
            setData={setData}
            page={page}
            setPage={setPage}
            value={debouncedValue}
          />
        </div>
      </section>
    </>
  );
};

export default Recs;