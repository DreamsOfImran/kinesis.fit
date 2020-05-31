/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";

const Project = () => {
  return (
    <section id="project" className="project-area pt-125 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center pb-50">
              <h5 className="sub-title mb-15">Featured Works</h5>
              <h2 className="title">Therapies You May Need</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row project-active">
          <div className="col-lg-4">
            <div className="single-project">
              <div className="project-image">
                <img src="assets/images/project/p-1.jpg" alt="Project" />
              </div>
              <div className="project-content">
                <a className="project-title" href="#">
                  Remedial Massage
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-project">
              <div className="project-image">
                <img src="assets/images/project/p-2.jpg" alt="Project" />
              </div>
              <div className="project-content">
                <a className="project-title" href="#">
                  Geriatric Physio
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-project">
              <div className="project-image">
                <img src="assets/images/project/p-3.jpg" alt="Project" />
              </div>
              <div className="project-content">
                <a className="project-title" href="#">
                  Sports Physio
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-project">
              <div className="project-image">
                <img src="assets/images/project/p-4.jpg" alt="Project" />
              </div>
              <div className="project-content">
                <a className="project-title" href="#">
                  Pregnancy Physio
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-project">
              <div className="project-image">
                <img src="assets/images/project/p-5.jpg" alt="Project" />
              </div>
              <div className="project-content">
                <a className="project-title" href="#">
                  Orthopaedic Physio
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-project">
              <div className="project-image">
                <img src="assets/images/project/p-6.jpg" alt="Project" />
              </div>
              <div className="project-content">
                <a className="project-title" href="#">
                  Back Neck Physio
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-project">
              <div className="project-image">
                <img src="assets/images/project/p-7.jpg" alt="Project" />
              </div>
              <div className="project-content">
                <a className="project-title" href="#">
                  Dry Needling
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
