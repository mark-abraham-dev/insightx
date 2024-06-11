import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../redux/store";
import { TABLE_COLUMNS, DEFAULT_PAGE_SIZE } from "../consts";

const TableView: React.FC = () => {
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [startRow, setStartRow] = useState(0);
  const [endRow, setEndRow] = useState(0);
  const table = useSelector((state: AppState) => state.tableReducer.table);

  useEffect(() => {
    setStartRow(Math.min(table.rows.length, page * DEFAULT_PAGE_SIZE));
    setEndRow(Math.min(table.rows.length, (page + 1) * DEFAULT_PAGE_SIZE));
    setPageCount(Math.ceil(table.rows.length / DEFAULT_PAGE_SIZE));
  }, [page]);

  return (
    <div className="relative overflow-x-auto bg-gray-600">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {TABLE_COLUMNS.map((column) => (
              <th className="px-6 py-3" key={`column-name-${column}`}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array(endRow - startRow)
            .fill(0)
            .map((_, index) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={`page-row-${startRow + index}`}
              >
                <td className="px-6 py-4">
                  {table.rows[startRow + index].firstName}
                </td>
                <td className="px-6 py-4">
                  {table.rows[startRow + index].lastName}
                </td>
                <td className="px-6 py-4">
                  {table.rows[startRow + index].age}
                </td>
                <td className="px-6 py-4">
                  {table.rows[startRow + index].height}
                </td>
                <td className="px-6 py-4">
                  {table.rows[startRow + index].weight}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <ul className="flex flex-row -space-x-px text-sm">
        <li>
          <button
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => setPage((prev) => prev - 1)}
            disabled={page === 0}
          >
            Previous
          </button>
        </li>
        {page < 3 &&
          Array(6)
            .fill(0)
            .map((_, index) => {
              if (index < 4)
                return (
                  <li key={`page-button-${index}`}>
                    <button
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      onClick={() => setPage(index)}
                    >
                      {index + 1}
                    </button>
                  </li>
                );
              else if (index < 5)
                return (
                  <li key={`page-button-${index}`}>
                    <label className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                      ...
                    </label>
                  </li>
                );
              else
                return (
                  <li key={`page-button-${index}`}>
                    <button
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      onClick={() => setPage(pageCount - 1)}
                    >
                      {pageCount}
                    </button>
                  </li>
                );
            })}
        {page > 2 &&
          page > pageCount - 4 &&
          Array(6)
            .fill(0)
            .map((_, index) => {
              if (index > 1)
                return (
                  <li key={`page-button-${index}`}>
                    <button
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      onClick={() => setPage(pageCount - 6 + index)}
                    >
                      {pageCount - 5 + index}
                    </button>
                  </li>
                );
              else if (index > 0)
                return (
                  <li key={`page-button-${index}`}>
                    <label className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                      ...
                    </label>
                  </li>
                );
              else
                return (
                  <li key={`page-button-${index}`}>
                    <button
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      onClick={() => setPage(0)}
                    >
                      {1}
                    </button>
                  </li>
                );
            })}
        {page > 2 &&
          page < pageCount - 3 &&
          Array(6)
            .fill(0)
            .map((_, index) => {
              if (index < 1)
                return (
                  <li key={`page-button-${index}`}>
                    <button
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      onClick={() => setPage(0)}
                    >
                      {1}
                    </button>
                  </li>
                );
              else if (index < 2)
                return (
                  <li key={`page-button-${index}`}>
                    <label className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                      ...
                    </label>
                  </li>
                );
              else if (index < 4)
                return (
                  <li key={`page-button-${index}`}>
                    <button
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      onClick={() => setPage(page + index - 2)}
                    >
                      {page + index - 1}
                    </button>
                  </li>
                );
              else if (index < 5)
                return (
                  <li key={`page-button-${index}`}>
                    <label className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                      ...
                    </label>
                  </li>
                );
              else
                return (
                  <li key={`page-button-${index}`}>
                    <button
                      className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      onClick={() => setPage(pageCount - 1)}
                    >
                      {pageCount}
                    </button>
                  </li>
                );
            })}
        <li>
          <button
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page + 1 >= pageCount}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default TableView;
