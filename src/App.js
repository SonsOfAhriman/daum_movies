import { Link, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import MoviePage from "./MoviePage";
import MoviesPage from "./MoviesPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MoviesPage />} />
      <Route path="/movies/:id" element={<MoviePage />} />
    </Routes>
  );
}

export default App;
