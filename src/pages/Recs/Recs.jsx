import Header from "../../components/Header/Header";
import Recomendations from "../../components/Recomendations/Recomendations";

const Recs = () => {
  return (
    <>
      <Header />
      <section>
        <div className="container">
          <Recomendations />
        </div>
      </section>
    </>
  );
};

export default Recs;
