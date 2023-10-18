import { faker } from "@faker-js/faker";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
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
let labels: any[] = [
  "1 Oct",
  "2 Oct",
  "3 Oct",
  "4 Oct",
  "5 Oct",
  "6 Oct",
  "7 Oct",
  "8 Oct",
  "9 Oct",
  "10 Oct",
  "11 Oct",
  "12 Oct",
];
export const customData = {
  labels,
  datasets: [
    {
      type: "line" as const,
      label: "Average",
      backgroundColor: "red",
      data: labels.map(() => faker.datatype.number({ min: 50, max: 50 })),
      borderColor: "red",
      borderWidth: 2,
      pointStyle: 'line'
    },
    {
      type: "bar" as const,
      label: "Dataset 1",
      borderColor: "#0E5CBE",
      backgroundColor: "#0E5CBE",
      borderWidth: 2,
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
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
