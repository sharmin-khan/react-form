import React, { useState } from "react";
import FormRow from "./FormRow";

const Form = () => {
  const [rows, setRows] = useState([{ id: 0 }]);
  const [counter, setCounter] = useState(0);
  const [allData, setAllData] = useState({});
  const [submittedData, setSubmittedData] = useState({});

  // Add new row
  const addRow = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    setRows([...rows, { id: newCounter }]);
  };

  // Delete row
  const deleteRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
    const newData = { ...allData };
    delete newData[id];
    setAllData(newData);
  };

  // Update data from child
  const handleDataChange = (id, data) => {
    setAllData({ ...allData, [id]: data });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(allData);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 border rounded bg-white">
      <h1 className="text-xl font-bold mb-4">Simple Form</h1>

      <form onSubmit={handleSubmit}>
        {rows.map((row) => (
          <FormRow
            key={row.id}
            row={row}
            deleteRow={() => deleteRow(row.id)}
            updateData={(data) => handleDataChange(row.id, data)}
          />
        ))}

        <button
          type="button"
          onClick={addRow}
          className="bg-green-500 text-white px-3 py-1 rounded mt-2 cursor-pointer"
        >
          + Add
        </button>

        <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 rounded mt-2 ml-2 cursor-pointer"
        >
          Submit
        </button>
      </form>

      {/* Live Form Data (Requirement 3) */}
      <div className="mt-6 border-t pt-4">
        <h2 className="text-lg font-semibold mb-2">Live Form Data:</h2>
        {rows.map((row) => {
          const data = allData[row.id] || {};
          return (
            <h3 key={row.id}>
              Row {row.id}: Name: {data.name || ""}, Role: {data.role || ""}
            </h3>
          );
        })}
      </div>

      {/* Submitted Form Data Table (Requirement 8) */}
      {Object.keys(submittedData).length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Submitted Form Data</h2>
          <table className="table-auto border-collapse border border-gray-400 w-full">
            <thead>
              <tr>
                <th className="border px-2 py-1">Row</th>
                <th className="border px-2 py-1">Name</th>
                <th className="border px-2 py-1">Role</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(submittedData).map(([id, data]) => (
                <tr key={id}>
                  <td className="border px-2 py-1">{id}</td>
                  <td className="border px-2 py-1">{data.name}</td>
                  <td className="border px-2 py-1">{data.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Form;
