/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { TeamShortData } from "../utils/data";

const Team = () => {
  return (
    <section id="team" className="team-area pt-125 pb-130 gray-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center pb-20">
              <h5 className="sub-title mb-15">Meet The Team</h5>
              <h2 className="title">Our Experts</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {TeamShortData.map((team) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={team.id}>
              <div
                className="single-team text-center mt-30 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="0.4s"
              >
                <div className="team-image">
                  <img src={team.image} alt="Team" />
                </div>
                <div className="team-content">
                  <h4 className="team-name">
                    <a href="#">{team.name}</a>
                  </h4>
                  <span className="sub-title">{team.position}</span>
                  <ul className="social mt-25">
                    {team.links.map((social) => (
                      <li key={social.id}>
                        <a href={social.url}>
                          <i className={"lni lni-" + social.icon}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
