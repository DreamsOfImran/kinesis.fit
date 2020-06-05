import React from "react";

const Map = () => {
  return (
    <section id="map" className="map-area">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            title="Address"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.042343382888!2d80.28258281517644!3d13.09650301566787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f5a56db7bb3%3A0x3d015e695d7b723a!2sP%20V%20Iyer%20St%2C%20Mahfushkhan%20Garden%2C%20Manadi%20Police%20Colony%2C%20George%20Town%2C%20Chennai%2C%20Tamil%20Nadu%20600001!5e0!3m2!1sen!2sin!4v1590938739293!5m2!1sen!2sin"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
        </div>
      </div>
      <div
        className="map-bg bg_cover d-none d-lg-block"
        style={{ backgroundImage: "url(/assets/images/map/map-bg2.jpg)" }}
      ></div>
    </section>
  );
};

export default Map;
