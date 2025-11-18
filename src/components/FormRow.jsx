import React, { useState, useEffect } from "react";

export default function FormRow({ deleteRow, row, updateData, errors }) {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
  });

  // Update parent state whenever local state changes
  useEffect(() => {
    updateData(formData);
  }, [formData]);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div>
      <div className="flex gap-2 items-center mb-2">
        <input
          type="text"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Enter Name"
          className="border p-2 rounded-md flex-1"
        />

        <select
          value={formData.role}
          onChange={(e) => handleChange("role", e.target.value)}
          className="border p-2 rounded flex-1"
        >
          <option value="">Select Developer</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="MERN Developer">MERN Developer</option>
        </select>

        <button
          type="button"
          onClick={() => deleteRow(row.id)}
          className="bg-red-500 text-white px-3 py-1 my-2 rounded cursor-pointer"
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
