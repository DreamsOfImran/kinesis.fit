/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer-area">
      <div className="footer-widget pt-80 pb-130">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-8">
              <div className="footer-logo mt-50">
                <a href="#">
                  {/* <img src="assets/images/logo.png" alt="Logo" /> */}
                  KINESIS INSTITUTE (LOGO)
                </a>
                <ul className="footer-info">
                  <li>
                    <div className="single-info">
                      <div className="info-icon">
                        <i className="lni lni-phone-set"></i>
                      </div>
                      <div className="info-content">
                        <p>+91 80560 32342</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-info">
                      <div className="info-icon">
                        <i className="lni lni-envelope"></i>
                      </div>
                      <div className="info-content">
                        <p>mail@kinesis.fit</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="single-info">
                      <div className="info-icon">
                        <i className="lni lni-map"></i>
                      </div>
                      <div className="info-content">
                        <p>Broadway, Chennai, TN, India</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="footer-social mt-20">
                  <li>
                    <a href="#">
                      <i className="lni lni-facebook-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni lni-twitter-original"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni lni-google"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="lni lni-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="footer-link mt-45">
                <div className="f-title">
                  <h4 className="title">Essential Links</h4>
                </div>
                <ul className="mt-15">
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="footer-link mt-45">
                <div className="f-title">
                  <h4 className="title">Services</h4>
                </div>
                <ul className="mt-15">
                  <li>
                    <a href="#">Sports Physio</a>
                  </li>
                  <li>
                    <a href="#">Pregnancy Physio</a>
                  </li>
                  <li>
                    <a href="#">Orthopaedic Physio</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-5 col-sm-8">
              <div className="footer-link mt-45">
                <div className="f-title">
                  <h4 className="title">Business Hours</h4>
                </div>
                <ul className="mt-15">
                  <li>
                    <a href="#">MON-FRI 7:00am – 7:00pm</a>
                  </li>
                  <li>
                    <a href="#">SAT 10:00am – 5:00pm</a>
                  </li>
                  <li>
                    <a href="#">SUN – CLOSED</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright text-center">
                <p>
                  Developed with ❤️ by{" "}
                  <a href="https://dreamsofimran.in">DreamsOfImran</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
