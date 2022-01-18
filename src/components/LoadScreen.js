import React from "react";
import "./LoadScreen.css";

function LoadScreen({display}) {
  

  return (
    <div className="background-overlay" style={{ display: display }}>
      <div className="loading-icon-wrapper">
        <div className="loading-icon loading-icon-animation"></div>
        {/* <div className="loading-icon2 loading-icon-animation-reverse"></div> */}
        <p>Loading</p>
      </div>
    </div>
  );
}

export default LoadScreen;