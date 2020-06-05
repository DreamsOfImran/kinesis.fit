import React from "react";
import NavBar from "../components/NavBar";

const Service = () => {
  return (
    <>
      <NavBar service={true} />
      <section id="about" className="about-area pt-80 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mt-90 clearfix">
                <div data-aos="fade-right" className="about-btn">
                  <img src="assets/images/about/about-1.jpg" alt="About" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content mt-45">
                <h4 className="about-welcome">Services</h4>
                <h3 className="about-title mt-10">Heart & Lung Disease</h3>
                <p className="mt-25">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages
                  <br /> <br />
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
                {/* <a className="main-btn mt-25" href="#">
                  learn more
                </a> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content mt-45">
                <p className="mt-25">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum passages
                  <br /> <br />
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mt-50 clearfix">
                <div data-aos="fade-left" className="about-btn">
                  <img src="assets/images/about/about-1.jpg" alt="About" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
