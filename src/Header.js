import React, { useState, useEffect } from "react";
import "./Header.css";
import nboImage from "./assets/nbo.png";

function Header() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatDateTime = (date) => {
    const formatNumber = (num) => String(num).padStart(2, "0");
    return `${formatNumber(date.getDate())}-${formatNumber(date.getMonth() + 1)}-${date.getFullYear()} ` +
           `${formatNumber(date.getHours())}:${formatNumber(date.getMinutes())}:${formatNumber(date.getSeconds())}`;
  };

  return (
    <div className="header">
      <img src={nboImage} alt="Logo" className="logo" />
      <h2 className="title">Nairobi Air Quality Index</h2>
      <h2 className="title" id="localetime">
        {formatDateTime(dateTime)}
      </h2>
      <a
        id="airqo"
        href="https://www.airqo.net/"
        target="_blank"
        rel="noreferrer"
        className="sponsor"
      >
        Powered by AirQo
      </a>
    </div>
  );
}

export default Header;
