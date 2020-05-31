import "./ComingSoon.css";
import React, { useState, useEffect } from "react";

const ComingSoon = () => {
  const [time, setTime] = useState("");
  const launchDate = new Date("Aug 20, 2020 00:00:00").getTime();

  const tick = () => {
    let now = new Date().getTime();
    let t = launchDate - now;

    if (t > 0) {
      let days = Math.floor(t / (1000 * 60 * 60 * 24));
      if (days < 10) {
        days = "0" + days;
      }

      let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      if (hours < 10) {
        hours = "0" + hours;
      }

      let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      if (mins < 10) {
        mins = "0" + mins;
      }

      let secs = Math.floor((t % (1000 * 60)) / 1000);
      if (secs < 10) {
        secs = "0" + secs;
      }

      setTime(`${days} : ${hours} : ${mins} : ${secs}`);
    }
  };

  useEffect(() => {
    setInterval(tick, 1000);
  });
  return (
    <header
      class="coming-soon"
      style={{ backgroundImage: "url(assets/images/background.jpg)" }}
    >
      <div class="content">
        <h1>
          KINESIS <span>INSTITUTE</span>
        </h1>
        <h2>COMING SOON</h2>
        <div class="countdown">{time}</div>
      </div>
    </header>
  );
};

export default ComingSoon;
