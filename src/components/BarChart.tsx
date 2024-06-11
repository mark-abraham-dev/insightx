import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../redux/store";
import { TEChart } from "tw-elements-react";

const BarChart: React.FC = () => {
  const table = useSelector((state: AppState) => state.tableReducer.table);
  const [labels, setLabels] = useState<string[]>([]);
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    const ages = [17, 21, 25, 29, 33, 37, 41, 46];
    setLabels(
      ages
        .slice(0, ages.length - 1)
        .map((item, index) => `${item} - ${ages[index + 1] - 1}`)
    );
    let newData = Array(ages.length).fill(0);
    for (let i = 0; i < table.rows.length; i++) {
      const a = table.rows[i].age;
      let j;
      for (j = ages.length - 1; j >= 0; j--) {
        if (ages[j] <= a) break;
      }
      newData[j] += 1;
    }
    setData(newData);
  }, [table]);

  return (
    <div className="w-1/3">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-gradient-to-r mt-8 mb-4 from-purple-400 via-pink-500 to-red-500 animate-pulse">
        BarChart
      </h1>
      <TEChart
        type="bar"
        data={{
          labels: labels,
          datasets: [
            {
              label: "Age",
              data: data,
            },
          ],
        }}
        options={{
          indexAxis: "y",
          scales: {
            x: {
              stacked: true,
              grid: {
                display: true,
                borderDash: [2],
                zeroLineColor: "rgba(0,0,0,0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
              ticks: {
                color: "rgba(0,0,0, 0.5)",
              },
            },
            y: {
              stacked: true,
              grid: {
                display: false,
              },
              ticks: {
                color: "rgba(0,0,0, 0.5)",
              },
            },
          },
        }}
        darkOptions={{
          indexAxis: "y",
          scales: {
            x: {
              stacked: true,
              grid: {
                display: true,
                color: "#555",
                borderDash: [2],
                zeroLineColor: "rgba(0,0,0,0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
              ticks: {
                color: "#fff",
              },
            },
            y: {
              stacked: true,
              grid: {
                display: false,
              },
              ticks: {
                color: "#fff",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
