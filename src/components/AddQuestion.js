import React, { useState } from "react";
import "./styles.css";
import Option from "./Option";
import QuestionTypeDropdown from "./QuestionTypeDropdown";
import { FaPlusCircle } from "react-icons/fa";

const AddQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [answerType, setAnswerType] = useState("None");
  const [options, setOptions] = useState([]);

  // Handle adding a new option
  const addOption = () => {
    setOptions([...options, { id: Date.now(), placeholder: "", min: "", max: "", rows: "" }]);
  };

  // Handle removing an option
  const removeOption = (id) => {
    setOptions(options.filter((option) => option.id !== id));
  };

  return (
    <div className="form-container">
      <h2>Add Question</h2>

      {/* Question Title Input */}
      <input
        type="text"
        className="question-title"
        placeholder="Question Title"
        value={questionTitle}
        onChange={(e) => setQuestionTitle(e.target.value)}
      />

      {/* Dropdown for Answer Type Selection */}
      <QuestionTypeDropdown answerType={answerType} setAnswerType={setAnswerType} />

      {/* Show options only for "Select", "Radio", or "Checkbox" types */}
      {["Select", "Radio", "Checkbox"].includes(answerType) && (
        <div className="options-container">
          {options.map((option, index) => (
            <Option key={option.id} index={index} removeOption={() => removeOption(option.id)} />
          ))}

          {/* Add Option Button */}
          <button className="add-btn" onClick={addOption}>
            <FaPlusCircle /> Add Option
          </button>
        </div>
      )}

      {/* Submit Button */}
      <button className="submit-btn">Submit</button>
    </div>
  );
};

export default AddQuestion;
