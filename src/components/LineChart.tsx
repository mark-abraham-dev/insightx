import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../redux/store";
import { TEChart } from "tw-elements-react";

const LineChart: React.FC = () => {
  const table = useSelector((state: AppState) => state.tableReducer.table);
  const [labels, setLabels] = useState<string[]>([]);
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    const heights = [165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 216];
    setLabels(
      heights
        .slice(0, heights.length - 1)
        .map((item, index) => `${item} - ${heights[index + 1] - 1}`)
    );
    let newData = Array(heights.length).fill(0);
    for (let i = 0; i < table.rows.length; i++) {
      const a = table.rows[i].height;
      let j;
      for (j = heights.length - 1; j >= 0; j--) {
        if (heights[j] <= a) break;
      }
      newData[j] += 1;
    }
    setData(newData);
  }, [table]);

  return (
    <div className="w-1/3">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-gradient-to-r mt-8 mb-4 from-purple-400 via-pink-500 to-red-500 animate-pulse">
        LineChart
      </h1>
      <TEChart
        type="line"
        data={{
          labels: labels,
          datasets: [
            {
              label: "Traffic",
              data: data,
            },
          ],
        }}
      />
    </div>
  );
};

export default LineChart;
