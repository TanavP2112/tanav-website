import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./SpotlightPage.css";

function SpotlightPage() {
  return (
    <div className='spotlight-container'>
      <video src='/videos/video-bg.mp4' autoPlay loop muted />
      <h1>WELCOME</h1>
      <p>Feel Free to Explore Around!</p>
      <div className='spotlight-btns'>
        <Button className='btns' buttonStyle='btn--outline'>
          See My Code!
        </Button>
      </div>
    </div>
  );
}

export default SpotlightPage;
