import React from "react";

const Testimonial = () => {
  return (
    <section id="testimonial" className="testimonial-area pt-130 pb-130">
      <div className="shape shape-one">
        <img src="assets/images/testimonial/shape.png" alt="testimonial" />
      </div>
      <div className="shape shape-tow">
        <img src="assets/images/testimonial/shape.png" alt="testimonial" />
      </div>
      <div className="shape shape-three">
        <img src="assets/images/testimonial/shape.png" alt="testimonial" />
      </div>
      <div className="container">
        <div
          className="testimonial-bg bg_cover pt-80 pb-80"
          style={{
            backgroundImage:
              "url(assets/images/testimonial/testimonial-bg.jpg)",
          }}
        >
          <div className="row">
            <div className="col-xl-4 offset-xl-7 col-lg-5 offset-lg-6 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
              <div className="testimonial-active">
                <div className="single-testimonial text-center">
                  <div className="testimonial-image">
                    <img
                      src="assets/images/testimonial/t-1.jpg"
                      alt="Testimonial"
                    />
                    <div className="quota">
                      <i className="lni lni-quotation"></i>
                    </div>
                  </div>
                  <div className="testimonial-content mt-20">
                    <p>
                      Lorem ipsum dolor sit amet, ectetur adipiscing elit.
                      Phasellus vel erat ces, commodo lectus eu, finibus diam. m
                      ipsum dolor sit amet, ectetur.
                    </p>
                    <h5 className="testimonial-name mt-15">Dawood</h5>
                    <span className="sub-title">Random Patient</span>
                  </div>
                </div>
                <div className="single-testimonial text-center">
                  <div className="testimonial-image">
                    <img
                      src="assets/images/testimonial/t-2.jpg"
                      alt="Testimonial"
                    />
                    <div className="quota">
                      <i className="lni lni-quotation"></i>
                    </div>
                  </div>
                  <div className="testimonial-content mt-20">
                    <p>
                      Lorem ipsum dolor sit amet, ectetur adipiscing elit.
                      Phasellus vel erat ces, commodo lectus eu, finibus diam. m
                      ipsum dolor sit amet, ectetur.
                    </p>
                    <h5 className="testimonial-name mt-15">Raja</h5>
                    <span className="sub-title">SRU Proferssor</span>
                  </div>
                </div>
                <div className="single-testimonial text-center">
                  <div className="testimonial-image">
                    <img
                      src="assets/images/testimonial/t-3.jpg"
                      alt="Testimonial"
                    />
                    <div className="quota">
                      <i className="lni lni-quotation"></i>
                    </div>
                  </div>
                  <div className="testimonial-content mt-20">
                    <p>
                      Lorem ipsum dolor sit amet, ectetur adipiscing elit.
                      Phasellus vel erat ces, commodo lectus eu, finibus diam. m
                      ipsum dolor sit amet, ectetur.
                    </p>
                    <h5 className="testimonial-name mt-15">Imran</h5>
                    <span className="sub-title">CEO, Some Company</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
