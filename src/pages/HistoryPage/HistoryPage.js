import React from "react";
import SickWaves from "../../images/stephanie-shank.gif";
import "./styles.css";
import Photo from "../../components/Photo";

export default function HistoryPage() {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "50px" }}>
        I'll be right back
      </h1>
      <Photo type="polaroid">
        <img src={SickWaves} className="SickWaves" alt="Sick waves" />
      </Photo>
      <a href="https://giphy.com/gifs/stefanie-shank-house-of-joy-stef-xT0GqcCJJJH12hJvGM">
        via GIPHY
      </a>
    </div>
  );
}
