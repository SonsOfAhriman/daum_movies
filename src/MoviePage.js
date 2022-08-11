import { useLocation } from "react-router-dom";
import "./MoviePage.css";

export default function MoviePage() {
  const location = useLocation();
  const state = location.state;

  console.log(location);
  return (
    <div className="App">
      <div style={{ borderRadius: "8px" }}>
        <img
          style={{
            height: "308px",
            padding: "70px 0 60px 0",
            float: "left",
            marginRight: "32px",
            borderRadius: "14%",
          }}
          src={state.mainPhoto.imageUrl}
        />
      </div>
      <div
        style={{
          padding: "70px 16px 0px 16px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>{state.titleKorean}</h1>
        <p>{state.titleEnglish}</p>
        <div
          style={{
            paddingTop: "12px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="grid-container-two">
              <p style={{ color: "#98989C" }}>개봉</p>
              <p>{state.productionYear}</p>
              <p style={{ color: "#98989C" }}>장르</p>
              <p>{state.genres}</p>
              <p style={{ color: "#98989C" }}>국가</p>
              <p>{state.productionCountries}</p>
              <p style={{ color: "#98989C" }}>등급</p>
              <p>{state.adultOption}</p>
              <p style={{ color: "#98989C" }}>러닝타임</p>
              <p></p>
            </div>
            <div
              className="grid-container-two"
              style={{ marginLeft: "60px", height: "100px" }}
            >
              <p style={{ color: "#98989C" }}>평점</p>
              <p>{state.avgRating}</p>
              <p style={{ color: "#98989C" }}>누적관객</p>
              <p>{state.totalAudienceCount}</p>
              <p style={{ color: "#98989C" }}>박스오피스 </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ clear: "both" }}>
        <h3>주요정보</h3>
        <p style={{ marginTop: "20px" }}>{state.plot}</p>
      </div>
    </div>
  );
}
