import "../../App.css";
import Card from "../Card";
import SpotlightPage from "../SpotlightPage";
import React from "react";

// only put page elements here
function Home() {
  return (
    <>
      <SpotlightPage />
      <Card />
    </>
  );
}

export default Home;
