import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";
// import Home from "./pages/Home/Home";
const Home = lazy(() => import("./pages/Home/Home"));
// import Favs from "./pages/Favs/Favs";
const Favs = lazy(() => import("./pages/Favs/Favs"));

// import Recs from "./pages/Recs/Recs";
const Recs = lazy(() => import("./pages/Recs/Recs"));
// import Movie from "./pages/Movie/Movie";
const Movie = lazy(() => import("./pages/Movie/Movie"));
// import Producers from "./pages/Producers/Producers";
const Producers = lazy(() => import("./pages/Producers/Producers"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Recs />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/producers/:id" element={<Producers />} />
          <Route path="/favs" element={<Favs />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
