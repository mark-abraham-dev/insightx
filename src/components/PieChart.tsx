import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../redux/store";
import { TEChart } from "tw-elements-react";

const PieChart: React.FC = () => {
  const table = useSelector((state: AppState) => state.tableReducer.table);
  const [labels, setLabels] = useState<string[]>([]);
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    const weights = [60, 65, 70, 75, 80, 85, 91];
    setLabels(
      weights
        .slice(0, weights.length - 1)
        .map((item, index) => `${item} - ${weights[index + 1] - 1}`)
    );
    let newData = Array(weights.length).fill(0);
    for (let i = 0; i < table.rows.length; i++) {
      const a = table.rows[i].weight;
      let j;
      for (j = weights.length - 1; j >= 0; j--) {
        if (weights[j] <= a) break;
      }
      newData[j] += 1;
    }
    setData(newData);
  }, [table]);

  return (
    <div className="w-1/3">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-gradient-to-r mt-8 mb-4 from-purple-400 via-pink-500 to-red-500 animate-pulse">
        PieChart
      </h1>
      <TEChart
        type="pie"
        data={{
          labels: labels,
          datasets: [
            {
              label: "Weight",
              data: data,
              backgroundColor: [
                "rgba(63, 81, 181, 0.5)",
                "rgba(77, 182, 172, 0.5)",
                "rgba(66, 133, 244, 0.5)",
                "rgba(156, 39, 176, 0.5)",
                "rgba(233, 30, 99, 0.5)",
                "rgba(66, 73, 244, 0.4)",
                "rgba(66, 133, 244, 0.2)",
              ],
            },
          ],
        }}
      />
    </div>
  );
};

export default PieChart;
