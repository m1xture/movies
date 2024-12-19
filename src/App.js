import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Favs from "./pages/Favs/Favs";
import Recs from "./pages/Recs/Recs";
import Movie from "./pages/Movie/Movie";
import Producers from "./pages/Producers/Producers";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Recs />} />
        <Route path="/movies/:id" element={<Movie />} />
        <Route path="/producers/:id" element={<Producers />} />
        <Route path="/favs" element={<Favs />} />
      </Routes>
    </div>
  );
}

export default App;
