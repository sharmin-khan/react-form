import React, { useState } from "react";
import FormRow from "./FormRow";

const Form = () => {
  const [rows, setRows] = useState([{ id: 0 }]);
  const [counter, setCounter] = useState(0);
  const [allData, setAllData] = useState({});
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState({});
  const [showLiveData, setShowLiveData] = useState(false);
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

     const newErrors = { ...errors };
    delete newErrors[id];
    setErrors(newErrors);
  };

  // Update data from child
  const handleDataChange = (id, data) => {
    setAllData({ ...allData, [id]: data });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    rows.forEach((row) => {
      const data = allData[row.id] || {};
      if (!data.name) newErrors[row.id] = { ...(newErrors[row.id] || {}), name: "Name is required" };
      if (!data.role) newErrors[row.id] = { ...(newErrors[row.id] || {}), role: "Role is required" };  
  })
    setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
      setSubmittedData(allData);
    }
  };
  const handleFocus = () => {
  setShowLiveData(true);
};

  return (
   
   <div className="min-h-screen flex items-center justify-center bg-gray-100">
     <div className="max-w-3xl w-full p-4 border border-gray-300 rounded bg-white">
      <h1 className="text-3xl font-semibold text-gray-700 mb-4">Simple Form</h1>

      <form onSubmit={handleSubmit}>
        {rows.map((row) => (
          <FormRow
            key={row.id}
            row={row}
            deleteRow={() => deleteRow(row.id)}
            updateData={(id, data) => handleDataChange(id, data)}
             onFocusInput={handleFocus} 
            errors={errors[row.id] || {}}
          />
        ))}

        <button
          type="button"
          onClick={addRow}
          className="bg-green-500 hover:bg-green-600  text-white text-lg font-extrabold px-3 py-1 rounded mt-2 cursor-pointer"
        >
          + 
        </button>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600  text-white text-lg font-medium px-3 py-1 rounded mt-2 ml-2 cursor-pointer"
        >
          Submit
        </button>
      </form>

      {/* Live Form Data (Requirement 3) */}
     {showLiveData && (
  <div className="mt-6 border-t border-gray-300 pt-4">
    <h2 className="text-xl font-semibold text-gray-700 mb-2">Live Form Data :</h2>
    {rows.map((row) => {
      const data = allData[row.id] || {};
      return (
        <h3 key={row.id} className="text-lg text-gray-600">
          Row {row.id} : Name : {data.name || ""}, Role : {data.role || ""}
        </h3>
      );
    })}
  </div>
)}

      {/* Submitted Form Data Table (Requirement 8) */}
      {Object.keys(submittedData).length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Submitted Form Data</h2>
          <table className="table-auto border-collapse border border-gray-300  w-full">
            <thead>
              <tr>
                <th className="border border-gray-300 px-2 py-1 text-gray-600">Row</th>
                <th className="border border-gray-300 px-2 py-1 text-gray-600">Name</th>
                <th className="border border-gray-300 px-2 py-1 text-gray-600">Role</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(submittedData).map(([id, data]) => (
                <tr key={id}>
                  <td className="border border-gray-300 px-2 py-1 text-gray-700">{id}</td>
                  <td className="border border-gray-300 px-2 py-1 text-gray-700">{data.name}</td>
                  <td className="border border-gray-300 px-2 py-1 text-gray-700">{data.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
   </div>
    
  );
};

export default Form;
