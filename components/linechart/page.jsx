"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
);

const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Website Visitors",
        data: [120, 220, 350, 280, 400, 320], // Replace with actual visitor data
        fill: false,
        borderColor: "#8A88FB",
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: "#8A88FB",
      },
    ],
  };

  const options = {
    responsive: true, // Enable responsiveness
    maintainAspectRatio: false, // Allow the aspect ratio to be adjusted
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
        title: {
          display: false,
          text: "",
          color: "#1E1E1E",
          font: {
            size: 14,
            weight: "400",
          },
        },
        ticks: {
          color: "#45447e",
        },
      },
      x: {
        title: {
          display: false,
          text: "",
          color: "#1E1E1E",
          font: {
            size: 14,
            weight: "400",
          },
        },
        ticks: {
          color: "#45447e",
        },
      },
    },
  };

  return (
    <div className="w-full h-40 md:w-full md:h-96">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
