import React from "react";
import TableView from "./TableView";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const Analysis: React.FC = () => {
  return (
    <div className="h-screen w-screen">
      <TableView />
      <div className="flex flex-row">
        <BarChart />
        <LineChart />
        <PieChart />
      </div>
    </div>
  );
};

export default Analysis;
