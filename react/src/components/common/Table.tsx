import React from 'react';

interface TableProps {
  headers: string[];
  data: (string | number | React.ReactNode)[][];
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-md">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="bg-neutral-light text-neutral-dark uppercase text-sm font-semibold py-3 px-4 text-left border-b border-neutral-light"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="bg-white hover:bg-neutral-light transition-colors duration-200">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="py-3 px-4 text-neutral-DEFAULT border-b border-neutral-light">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
