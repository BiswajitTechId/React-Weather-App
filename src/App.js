import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";
import background from "./img/background-image.jpg";
import React from "react";

export default function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <div className="inner-container">
        <Weather defaultCity="Bhadrak" />
        <Footer />
      </div>
    </div>
  );
}
