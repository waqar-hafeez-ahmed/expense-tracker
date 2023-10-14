import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  // Now we will calculate maxValue in the year. To compare it with other data points.
  // // first we will extract all the values from our data points.
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  // // secondly we will extract the maximum  value from our data points array.
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {/* // we will map all the data points that we recieve through the props. */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
