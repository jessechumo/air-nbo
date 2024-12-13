import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faCompress } from "@fortawesome/free-solid-svg-icons";
import "./legend.css";

function Legend() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const renderLegendItems = () => {
    const legendData = [
      { range: "0 - 12", color: "#4FCA57", description: "Good" },
      { range: "12.1 - 35.4", color: "#F4F432", description: "Moderate" },
      { range: "35.5 - 55.4", color: "#F59636", description: "Unhealthy for Sensitive Groups" },
      { range: "55.5 - 150.4", color: "#F53636", description: "Unhealthy" },
      { range: "150.5 - 250.4", color: "#B836F5", description: "Very Unhealthy" },
      { range: "250.5 - 500.4", color: "#8C2424", description: "Hazardous" },
    ];

    return legendData.map((item, index) => (
      <div className="legend-item" key={index}>
        <span
          className="legend-color"
          style={{ backgroundColor: item.color }}
        >
          {item.range}
        </span>
        <span>: {item.description}</span>
      </div>
    ));
  };

  return (
    <div className={`legend-container ${isVisible ? "expanded" : "minimized"}`}>
      <div className="legend-header">
        <h4 className="legend-title">Air Quality Index Legend</h4>
        <button onClick={toggleVisibility}>
          <FontAwesomeIcon icon={isVisible ? faCompress : faExpand} />
        </button>
      </div>
      {isVisible && (
        <div className="legend">
          {renderLegendItems()}
        </div>
      )}
      <div className="refresh-time">
        <span>
          Last Refreshed: <span id="last-refreshed"></span>
        </span>
      </div>
    </div>
  );
}

export default Legend;
