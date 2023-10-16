import React, { useRef, useEffect, useState, useMemo } from "react";
import type { ChartData, ChartArea } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(ArcElement, LinearScale, CategoryScale, Legend, Tooltip);

interface GaugeChartProps {
  value: number; // Nilai yang akan ditampilkan di grafik meter
  minValue: number; // Nilai minimum (biasanya 0)
  maxValue: number; // Nilai maksimum (biasanya 100)
  className?: string;
  width?: string;
  height?: string;
}

const labels = ["Blue", "Green", "Orange", "Yellow", "Red"];

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
  const colorOne = "#04ebff";
  const colorTwo = "#7bfc45";
  const colorThree = "#eef604";
  const colorFour = "#f69404";
  const colorFive = "#f60413";

  const gradient = ctx.createLinearGradient(area.left, 0, area.right, 0);

  gradient.addColorStop(0.1, colorOne);
  gradient.addColorStop(0.35, colorTwo);
  gradient.addColorStop(0.45, colorThree);
  gradient.addColorStop(0.65, colorFour);
  gradient.addColorStop(0.95, colorFive);

  return gradient;
}

const GaugeChart: React.FC<GaugeChartProps> = ({
  value,
  minValue,
  maxValue,
  className,
  height,
  width
}) => {
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<"bar">>({
    datasets: [],
  });

  const data = useMemo(() => {
    let labels:any[] = [];
    let datasets:any[] = [
      {
        label: "Temperature",
        data: [value, maxValue - value],
      },
    ];
    return {
      labels,
      datasets
    }
  },[value, maxValue])

  const customOptions = {
    cutout: "70%",
    rotation: -90, // Start angle in radians
    circumference: 180, // End angle in radians (creates a semi-circle)
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: true,
      tooltip: false,
    },
  };

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        backgroundColor: [
          createGradient(chart.ctx, chart.chartArea),
          "#f1efef",
        ],
      })),
    };

    setChartData(chartData);
  }, []);

  return (
    <Chart
      ref={chartRef}
      type="doughnut"
      data={chartData}
      options={customOptions as any}
      className={className}
      height={height}
      width={width}
    />
  );
};

export default GaugeChart;
