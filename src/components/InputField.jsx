import React from "react";

export default function InputField({ text, handleInput, handleSubmit }) {
  return (
    <label>
      <input
        className="inputText"
        type="text"
        value={text}
        onChange={(e) => handleInput(e.target.value)}
      />
      <button className="btnAdd" onClick={handleSubmit}>
        Add Todo
      </button>
    </label>
  );
}
