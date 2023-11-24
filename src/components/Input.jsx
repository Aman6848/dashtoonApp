import React from "react";
export default function Input({ objValue, onChange, index, deleteField, addField }) {
  // eslint-disable-next-line
  const { label, type, value } = objValue;
  return (
    <div className="scene">
      <div className="input-container">
        
        {/* <p>Scene: {index+1}</p> */}
          <input
            type="text"
            placeholder= " "
            id={label}
            autoComplete="off"
            className="input"
            value={value || ""}
            onChange={(e) => onChange(e, index)}
          />
          <div className="cut"></div>
          <label for={label} className="placeholder">Scene {index+1}</label>
      </div>
      <div className="scn-btn">
        <button class="delete-scene" onClick={(e) => deleteField(e, index)}><i className="material-icons">delete</i></button>
        <button class="new-scene" onClick={(e) => addField(e, index)}><i className="material-icons">add</i></button>
      </div>
    </div>
  );
}
