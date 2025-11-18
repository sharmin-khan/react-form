import React, { useState } from "react";
import FormRow from "./FormRow";

const Form = () => {
  const [rows, setRows] = useState([{ id: 0 }]);
  const [counter, setCounter] = useState(0);

  // Add new row
  const addRow = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    setRows([...rows, { id: newCounter }]);
  };

  //delete row functionality
  const deleteRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded bg-white">
      <h1 className="text-xl font-bold mb-4">Simple Form</h1>
      <form>
        {rows.map((row) => (
          <FormRow key={row.id} row={row} deleteRow={() => deleteRow(row.id)} />
        ))}
        <button
          type="button"
          onClick={() => addRow(rows.length)}
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
    </div>
  );
};
export default Form;
