import Header from "../../components/Header/Header";
import css from "./Home.module.css";
import VideoBg from "../../imgs/main-bg.mp4";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className={css.hero}>
          <div className={css["hero-overlay"]}>
            <video className={css.hero__video} autoPlay muted loop>
              <source src={VideoBg} type="video/mp4" />
            </video>
          </div>
          <div className="container" data-hero-container>
            <div className={css["hero-box"]}>
              <h1 className={css.hero__title}>MovieSearcher</h1>
              <p className={css.hero__text}>
                Go to the <NavLink to="/movies">/movies</NavLink> page and
                search around thosaunds of movies!
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
