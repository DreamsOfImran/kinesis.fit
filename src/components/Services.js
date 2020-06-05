import React from "react";
import { serviceShortData } from "../utils/data";

const Services = () => {
  return (
    <section id="service" className="services-area pt-125 pb-130 gray-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center pb-20">
              <h5 className="sub-title mb-15">Our Services</h5>
              <h2 className="title">What We Do?</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {serviceShortData.map((service) => (
            <div className="col-lg-4 col-md-6 col-sm-8" key={service.id}>
              <div
                className="single-services text-center mt-30 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <div className="services-icon">
                  <i className={"lni lni-" + service.icon}></i>
                </div>
                <div className="services-content mt-15">
                  <h4 className="services-title">{service.title}</h4>
                  <p className="mt-20">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
