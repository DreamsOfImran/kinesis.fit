import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { serviceLongData } from "../utils/data";
import { Redirect } from "react-router-dom";

const Service = (props) => {
  const [data, setData] = useState({});
  const { name: slug } = props.match.params;

  useEffect(() => {
    const fetchedData = serviceLongData.find(
      (service) => service.slug === slug
    );
    if (fetchedData) {
      setData(fetchedData);
    } else {
      {
        /* <Redirect to="/page-not-found" />; */
      }
    }
  });

  return (
    <>
      <NavBar service={true} />
      <section id="about" className="about-area pt-80 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mt-90 clearfix">
                <div data-aos="fade-right" className="about-btn">
                  <img src="/assets/images/about/about-1.jpg" alt="About" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content mt-45">
                <h4 className="about-welcome">Services</h4>
                <h3 className="about-title mt-10">{data.title}</h3>
                <p
                  className="mt-25"
                  dangerouslySetInnerHTML={{ __html: data.content1 }}
                ></p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content mt-45">
                <p
                  className="mt-25"
                  dangerouslySetInnerHTML={{ __html: data.content2 }}
                ></p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mt-50 clearfix">
                <div data-aos="fade-left" className="about-btn">
                  <img src="/assets/images/about/about-1.jpg" alt="About" />
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
