import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { generateTable, updateTable } from "../redux/actions/tableActions";
import Header from "./Header";
import { TableRow } from "../types";

const Setting: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleStartWithRandomTable = () => {
    dispatch(generateTable());
    navigate("/analysis");
  };

  const handleUpload = () => {
    if (file) {
      const reader = new FileReader();
      const tableRows: TableRow[] = [];
      reader.onload = function () {
        if (reader.result) {
          const rows = reader.result.toString().split("\r\n");
          for (let i = 1; i < rows.length; i++) {
            if (i === rows.length - 1) {
              dispatch(updateTable({ rows: tableRows }));
              navigate("/analysis");
            }
            const rowValues = rows[i].split(",");
            tableRows.push({
              firstName: rowValues[0],
              lastName: rowValues[1],
              age: Number(rowValues[2]),
              height: Number(rowValues[3]),
              weight: Number(rowValues[4]),
            });
          }
        }
      };
      reader.readAsText(file);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col justify-between items-center h-screen w-screen p-10">
      <Header />
      <input type="file" onChange={handleFileChange} />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        onClick={handleUpload}
      >
        Start with a source file
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        onClick={handleStartWithRandomTable}
      >
        Start with a random table
      </button>
    </div>
  );
};

export default Setting;
