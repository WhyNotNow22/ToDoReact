import React from 'react'
import { Button, Input } from 'antd';
import './style.css'

class TaskInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  addTask = event => {
    const { input } = this.state;
    const { addTask } = this.props;
    if (input) {
      addTask(input);
      this.setState({ input: '' });
    }
  }

  inputChange = event => {
    this.setState({ input: event.target.value });
  }

  enterPressed = event => {
    if (!event.ctrlKey) {
      this.addTask();
      event.preventDefault();
    } else {
      this.setState(state => {
        return {
          input: state.input + '\n',
        }
      });
    }
  }

  render() {
    const { input } = this.state;
    const { TextArea } = Input;
    return (
      <div className='task-input'>
        <TextArea
          placeholder='Enter new task...'
          id='input-text-area'
          size="large"
          value={input}
          onChange={this.inputChange}
          onPressEnter={this.enterPressed}
        />
        <Button className='add-button' type="primary" onClick={this.addTask} >Apply</Button>
      </div>
    )
  }
}

export default TaskInput
