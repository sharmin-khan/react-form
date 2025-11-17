import React from 'react'

export default function FormRow() {
  return (
    <div>
        <input type="text"
        placeholder="Enter value"
        className="border p-2 rounded-md flex-1"
        />
        <select className="border p-2 rounded flex-1">
            <option value="">Frontend Developer</option>
            <option value="option 1">Backend Developer</option>
            <option value="option 2">MERN Developer</option>
        </select>
        <button className='bg-red-500 text-white px-3 py-1 rounded'>Delete</button>
    </div>
  )
}
