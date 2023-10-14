import React from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  // We will set bar fill height to add dynamic styling.
  let barFillHeight = "0%";
  // We will calculate bar fill height by dividing value by max value.
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  //   console.log(props.maxValue);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/* in-line style accept object to add style */}
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
