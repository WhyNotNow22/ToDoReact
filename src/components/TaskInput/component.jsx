import React from 'react'
import { Button, Input } from 'antd';
import './style.css'

function TaskInput(props) {
  
  const { input, addTask, inputChange, enterPressed } = props;
  const { TextArea } = Input;
  return (
    <div className='task-input'>
      <TextArea
        placeholder='Enter new task...'
        id='input-text-area'
        size="large"
        value={input}
        onChange={inputChange}
        onPressEnter={enterPressed}
      />
      <Button className='add-button' type="primary" onClick={addTask} >Apply</Button>
    </div>
  )
}

export default TaskInput
