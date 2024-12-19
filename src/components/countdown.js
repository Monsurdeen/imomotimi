import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Countdown({theme}) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-12-31T23:59:59").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const interval = setInterval(updateCountdown, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);

  }, []);


  const Imagesrc = (theme === "dark" ? "/shape-top-dark-grey-80.png":"/shape-top-grey-80.png")

  return (
    <div>
      <section className="section2">
        <h2 className="counthead">Countdown Audition</h2>
        <div className="count">
          <div>
            <span className="time" id="days">{timeLeft.days}</span>
            <hr width="27px" color="#999" />
            <p className="duration">Days</p>
          </div>
          <div className="dot">:</div>
          <div>
            <span className="time" id="hours">{timeLeft.hours}</span>
            <hr width="27px" color="#999" />
            <p className="duration">Hours</p>
          </div>
          <div className="dot">:</div>
          <div>
            <span className="time" id="minutes">{timeLeft.minutes}</span>
            <hr width="27px" color="#999" />
            <p className="duration">Minutes</p>
          </div>
          <div className="dot">:</div>
          <div>
            <span className="time" id="seconds">{timeLeft.seconds}</span>
            <hr width="27px" color="#999" />
            <p className="duration">Seconds</p>
          </div>
        </div>
        <Image
           src={Imagesrc}
          alt="top grey"
          className="img2"
          id="topdark"
          width={1000}
          height={100}
        />
      </section>
    </div>
  );
}
