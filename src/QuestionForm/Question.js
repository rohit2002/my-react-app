import React from 'react'
import "./Question.css";

const Question = () => {
  return (
    <div>
      <div>
        <input type="text" placeholder='Question Title' className='quesTitle'/>

        <br />
        <br />
        <input type="text" placeholder='Answer Type' className='textArea' />
        <select name="" id="textArea" className='options'>
            <option value="1">None</option>
            <option value="2">Text</option>
            <option value="3">Number</option>
            <option value="4">Select</option>
            <option value="5">Textarea</option>
            <option value="6">Radio</option>
            <option value="7">Checkbox</option>
            <option value="8">Slider</option>
        </select>
  

        <div>
          <p>Option 1</p>
          <input type="text" placeholder='placeholder' className='place' />
          <input type="text" placeholder='Min'  className='min'/>
          <input type="text" placeholder='Max' className='max' />
        </div>
      </div>
    </div>
  )
}

export default Question
