import React from "react";
import ReactApexChart from "react-apexcharts";
const Dounghnut = () => {
  const options = {
    labels: ["Category A", "Category B", "Category C"],
    legend: {
      position: "bottom",
    },
  };

  const series = [44, 55, 41]; // Data values for the chart

  return (
    <div>
      <ReactApexChart options={options} series={series} type="donut" width="380" />
    </div>
  );
};

export default Dounghnut;
