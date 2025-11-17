import React, { useState } from "react";
import FormRow from "./FormRow";

const Form = () => {

    const [rows, setRows]=useState([{}]);// initially empty row

    const addRow=()=>{
        setRows([...rows,{}]);//add new row
    }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded bg-white">
      <h1 className="text-xl font-bold mb-4">Simple Form</h1>
     
      <form>
        {rows.map((row,index)=>(
          <FormRow key={index} />
        ))}
          <button
          type="button"
          onClick={addRow}
          className="bg-green-500 text-white px-3 py-1 rounded mt-2">
            +
          </button>
           <button
          type="submit"
          className="bg-blue-500 text-white px-3 py-1 rounded mt-2 ml-2"
        >
          Submit
        </button>
      </form>
    
    </div>
  );
};
export default Form;
