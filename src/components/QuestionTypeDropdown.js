import React from "react";

const QuestionTypeDropdown = ({ answerType, setAnswerType }) => {
  const questionTypes = ["None", "Text", "Number", "Select", "TextArea", "Radio", "Checkbox", "Slider"];

  return (
    <select className="answer-type" value={answerType} onChange={(e) => setAnswerType(e.target.value)}>
      {questionTypes.map((type, index) => (
        <option key={index} value={type}>{type}</option>
      ))}
    </select>
  );
};

export default QuestionTypeDropdown;
