import React, { useState, useEffect } from "react";

export default function FormRow({ deleteRow, row, updateData, errors ,onFocusInput}) {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
  });

  // Update parent state whenever local state changes
 useEffect(() => {
  updateData(row.id, formData);
}, [formData]);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div>
  <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center mb-2 mt-2">
    <input
      type="text"
      value={formData.name}
      onChange={(e) => handleChange("name", e.target.value)}
      onFocus={onFocusInput} 
      placeholder="Enter Name"
      className="border border-gray-300 p-2 rounded-md flex-1 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none w-full sm:w-auto"
    />

    <select
      value={formData.role}
      onChange={(e) => handleChange("role", e.target.value)}
      onFocus={onFocusInput} 
      className="border border-gray-300 p-2 rounded flex-1 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none w-full sm:w-auto"
    >
      <option value="">Select Developer</option>
      <option value="Frontend Developer">Frontend Developer</option>
      <option value="Backend Developer">Backend Developer</option>
      <option value="MERN Developer">MERN Developer</option>
    </select>

    <button
      type="button"
      onClick={() => deleteRow(row.id)}
      className="bg-red-500 hover:bg-red-600 text-white text-lg font-medium px-3 py-1 my-2 sm:my-0 rounded cursor-pointer"
    >
      Delete
    </button>
  </div>

  {/* Show error messages */}
  {errors?.name && <p className="text-red-500 text-sm">{errors.name}</p>}
  {errors?.role && <p className="text-red-500 text-sm">{errors.role}</p>}
</div>

  );
}
