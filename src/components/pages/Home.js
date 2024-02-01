import "../../App.css";
import Card from "../Card";
import SpotlightPage from "../SpotlightPage";
import Footer from "../Footer";
import React from "react";

// only put page elements here
function Home() {
  return (
    <>
      <SpotlightPage />
      <Card />
      <Footer />
    </>
  );
}

export default Home;
