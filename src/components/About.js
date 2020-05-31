/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";

const About = () => {
  return (
    <section id="about" className="about-area pt-80 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-image mt-50 clearfix">
              <div className="single-image float-left">
                <img src="assets/images/about/about-1.jpg" alt="About" />
              </div>
              <div data-aos="fade-right" className="about-btn">
                <a className="main-btn" href="#">
                  <span>3</span> Years Experience
                </a>
              </div>
              <div className="single-image image-tow float-right">
                <img src="assets/images/about/about-2.png" alt="About" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content mt-45">
              <h4 className="about-welcome">About Us </h4>
              <h3 className="about-title mt-10">Reasons to choose</h3>
              <p className="mt-25">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages
                <br /> <br />
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
              <a className="main-btn mt-25" href="#">
                learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
