import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <header
      class="coming-soon"
      style={{
        backgroundImage: "url(/assets/images/map/map-bg2.jpg)",
      }}
    >
      <div class="content">
        <h2>404</h2>
        <h1>
          Oops, <span>You've Lost</span>
        </h1>
        <Link to="/" className="main-btn mt-35">
          Back to Home
        </Link>
      </div>
    </header>
  );
};

export default PageNotFound;
