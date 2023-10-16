import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const customData = {
  labels: ["1 Oct", "2 Oct", "3 Oct", "4 Oct", "5 Oct", "6 Oct", "7 Oct", "8 Oct", "9 Oct", "10 Oct", "11 Oct", "12 Oct"],
  datasets: [
    {
      label: "",
      data: [50, 30, 20, 100, 40, 80, 50, 30, 20, 100, 40, 80],
      backgroundColor: ["#0E5CBE"],
      borderColor: ["#FFFFFF"],
      borderWidth: 2,
      borderRadius: 5,
    },
  ],
};

export const customOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    tooltip: {
      titleFont: {
        size: 14,
      },
      bodyFont: {
        size: 12,
      },
    },
    legend: {
      display: false,
      position: "top" as const,
      align: "end" as const,
      labels: {
        borderRadius: 4,
        boxWidth: 16,
        useBorderRadius: true,
        pointStyle: "circle",
      },
    },
    title: {
      position: "top" as const,
      align: "start" as const,
      display: false,
      text: "Monthly Filling Activity",
      color: "#333",
      font: {
        size: 18,
        weight: "bold",
      },
    },
  },
  elements: {
    bar: {
      barPercentage: 0.9,
      categoryPercentage: 1,
      useBorderRadius: true,
    },
  },
};

type BarProps = {
  data?: {
    labels: any;
    datasets: any;
  };
  options?: any;
  width?: string;
  height?: string;
  className?: string;
};

const BarChart = ({ data, options, width, height, className }: BarProps) => {
  return (
    <div className="w-full flex items-center gap-2 overflow-x-hidden overflow-y-auto">
      <Bar
        data={data ? data : customData}
        height={height}
        width={width}
        options={options ? options : customOptions}
        className={className}
      />
    </div>
  );
};

export default BarChart;
