import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header id="home" className="header-area pt-100">
      <div className="shape header-shape-one">
        <img src="assets/images/banner/shape/shape-1.png" alt="shape" />
      </div>
      <div className="shape header-shape-tow animation-one">
        <img src="assets/images/banner/shape/shape-2.png" alt="shape" />
      </div>
      <div className="shape header-shape-three animation-one">
        <img src="assets/images/banner/shape/shape-3.png" alt="shape" />
      </div>
      <div className="shape header-shape-fore">
        <img src="assets/images/banner/shape/shape-4.png" alt="shape" />
      </div>
      <NavBar />
      <div className="header-banner d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-9 col-sm-10">
              <div className="banner-content">
                <h4
                  className="sub-title wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="1s"
                >
                  KINESIS INSTITUTE
                </h4>
                <h1
                  className="banner-title mt-10 wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="2s"
                >
                  <span>Getting</span> You Better Is Great, Keeping You That Way
                  Is Better
                </h1>
                <a
                  className="banner-contact mt-25 wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="2.3s"
                  href="#contact"
                >
                  Redefine Your Movements
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="banner-image bg_cover"
          style={{
            backgroundImage: "url(assets/images/banner/banner-image.jpg)",
          }}
        ></div>
      </div>
    </header>
  );
};

export default Header;
