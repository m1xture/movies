import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import ProducerDetails from "../../components/ProducerDetails/ProducerDetails";
import css from "./Producers.module.css";

const Producers = () => {
  const { id } = useParams();
  return (
    <>
      <Header />
      <section className={css.prod}>
        <div className="container" data-prod-container>
          <ProducerDetails id={id} />
        </div>
      </section>
    </>
  );
};

export default Producers;
