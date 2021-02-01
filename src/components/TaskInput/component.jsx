import React from 'react'
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
    const height = event.target.previousElementSibling.scrollHeight;
    if (input) {
      addTask(input, height);
      this.setState({ input: '' });
    }
  }

  inputChange = event => {
    this.setState({ input: event.target.value });
  }

  render() {
    const { input } = this.state;
    return (
      <div className='task-input'>
        <textarea
          className='input-field'
          value={input}
          onChange={this.inputChange}
        />
        <button className='add-button' onClick={this.addTask}>Apply</button>
      </div>
    )
  }
}

export default TaskInput
