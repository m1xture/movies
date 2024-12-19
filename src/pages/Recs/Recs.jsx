import Header from "../../components/Header/Header";
import Recomendations from "../../components/Recomendations/Recomendations";
import css from "./Recs.module.css";

const Recs = () => {
  return (
    <>
      <Header />
      <section className={css.recs}>
        <div className="container">
          <Recomendations />
        </div>
      </section>
    </>
  );
};

export default Recs;
