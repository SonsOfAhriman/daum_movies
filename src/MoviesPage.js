import logo from "./logo.svg";
import "./MoviesPage.css";

import movies from "./movies.json";
import MoviePage from "./MoviePage";
import { Link } from "react-router-dom";

export default function MoviesPage() {
  return (
    <div className="App">
      <header>
        <a style={{ fontSize: "24px" }}>
          <strong>예매순위</strong>
        </a>
      </header>
      <div className="grid-container">
        {movies.movieCommon.map((movie, index) => (
          <div key={index} className="grid-item">
            <Link to={`/movies/${movie.id}`} state={movie}>
              <div className="card">
                <div className="poster">
                  <img src={movie.mainPhoto.imageUrl} />
                  <div
                    style={{
                      position: "absolute",
                      left: "12px",
                      top: "10px",
                      color: "white",
                      fontSize: "32px",
                    }}
                  >
                    <em>{index + 1}</em>
                  </div>
                </div>
                <div className="card-info">
                  <a
                    style={{
                      fontWeight: "bold",
                      textDecoration: "none",
                      fontWeight: "600",
                      textDecoration: "none",
                      color: "black",
                      width: "200px",
                      display: "block",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                    className="title"
                  >
                    {movie.titleKorean}
                  </a>
                  <div style={{ marginTop: "8px" }}>
                    <span>
                      평점{" "}
                      <span style={{ color: "red" }}>{movie.avgRating}</span>{" "}
                    </span>
                    <span>예매율 </span>
                  </div>
                  <div>
                    <span style={{ color: "#98989C" }}>
                      개봉 {movie.productionYear}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
