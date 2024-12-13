import Header from "../../components/Header/Header";
import css from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className={css.hero}>
          <div className="container">
            <h1>MovieSearcher</h1>
            <p>
              Go to the /recommended page and search around thosaunds of movies!
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
