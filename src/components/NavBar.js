/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";

const NavBar = () => {
  return (
    <div className="navigation-bar">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="#">
                {/* <img src="assets/images/logo.png" alt="Logo" /> */}
                KINESIS INSTITUTE (LOGO)
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul id="nav" className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="page-scroll" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#service">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#project">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#team">
                      Team
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="navbar-btn ml-20 d-none d-sm-block">
                <a className="main-btn" href="#">
                  <i className="lni lni-phone"></i> +91 80560 32342
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
