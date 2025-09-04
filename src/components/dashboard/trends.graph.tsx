
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const TrendGraph: React.FC = () => {
  const data = [
    { month: "Jan", trans: 200 },
    { month: "Feb", trans: 900 },
    { month: "Mar", trans: 400 },
    { month: "Apr", trans: 700 },
    { month: "May", trans: 800 },
    { month: "Jun", trans: 200 },
    { month: "Jul", trans: 500 },
    { month: "Aug", trans: 160 },
    { month: "Sep", trans: 800 },
    { month: "Oct", trans: 220 },
    { month: "Nov", trans: 600 },
    { month: "Dec", trans: 300 },
  ];

  const series = [
    {
      name: "transaction",
      data: data.map((d) => d.trans),
    },
  ];

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      colors: ["#007BFF"],  // Keep stroke color solid
      width: 1,             // Width of the stroke line
    },
    title: {
      text: "Transaction Trends",
      align: "left",
    },
    xaxis: {
      type: "category",
      categories: data.map((d) => d.month),
    },
    yaxis: {
      min: 10,
      max: 1000,
      tickAmount: 5,
      title: {
        text: "Volume of transactions",
      },
      labels: {
        formatter: function (value: number) {
          return value.toFixed(0);
        },
      },
    },
    
    markers: {
      size: 5,
      colors: ["#007BFF"],
      // strokeColors: "#fff",
      strokeWidth: 5,
      shape: "circle",
      hover: {
        size: 7,
      },
    },
    tooltip: {
      x: {
        format: "MMM",
      },
    },
  };
  
  return (
    <div id="chart" className="bg-white rounded-2xl shadow-md border p-4">
      <ReactApexChart
        className="mt-8"
        options={options}
        series={series}
        height={350}
      />
    </div>
  );
};

export default TrendGraph;
