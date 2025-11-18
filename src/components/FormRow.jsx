import React, { useState } from 'react'

export default function FormRow() {

  const [developer, setDeveloper]=useState();

  return (
    <div>
        <input type="text"
        value={developer}
        placeholder="Enter value"
        className="border p-2 rounded-md flex-1"
        />
        <select 
        onChange={(e)=>setDeveloper(e.target.value)}
         className="border p-2 rounded flex-1">
            <option value="">Select Option</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="MERN Developer">MERN Developer</option>
        </select>
        <button className='bg-red-500 text-white px-3 py-1 rounded cursor-pointer'>Delete</button>
    </div>
  )
}
