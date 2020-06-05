/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Services from "../components/Services";
import Project from "../components/Project";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import Map from "../components/Map";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="preloader">
        <div className="loader_34">
          <div className="ytp-spinner">
            <div className="ytp-spinner-container">
              <div className="ytp-spinner-rotator">
                <div className="ytp-spinner-left">
                  <div className="ytp-spinner-circle"></div>
                </div>
                <div className="ytp-spinner-right">
                  <div className="ytp-spinner-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Header />

      <About />

      <Services />

      <Project />

      <Team />

      <Testimonial />

      <Contact />

      <Map />

      <Footer />

      <a href="#" className="back-to-top">
        <i className="lni lni-chevron-up"></i>
      </a>
    </>
  );
};

export default Home;
