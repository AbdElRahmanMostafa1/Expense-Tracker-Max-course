import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const expenseMax = props.dataPoints.map((expense) => +expense.value);
  const maxValue = Math.max(...expenseMax);
  console.log(maxValue);
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => {
        return (
          <ChartBar
            key={datapoint.label}
            value={datapoint.value}
            maxValue={maxValue}
            label={datapoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
