import React from "react";
import { FaRegMinusSquare } from "react-icons/fa";
import "./Option.css";

const Option = ({ index, removeOption }) => {
  return (
    <div className="option-container">
      <span>Option {index + 1}</span>
      <input type="text" placeholder="Placeholder" />
      <input type="number" placeholder="Min"  className="min"/>
      <input type="number" placeholder="Max"  className="min"/>
      <input type="number" placeholder="Rows"  className="min"/>

      
      <button className="remove-btn" onClick={removeOption}>
        <FaRegMinusSquare />
      </button>
    </div>
  );
};

export default Option;
