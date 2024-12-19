import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import ProducerDetails from "../../components/ProducerDetails/ProducerDetails";

const Producers = () => {
  const { id } = useParams();
  return (
    <>
      <Header />
      <section>
        <div className="container">
          <ProducerDetails id={id} />
        </div>
      </section>
    </>
  );
};

export default Producers;
