import React from 'react'
import TaskInput from '../TaskInput'
import './style.css'

class TaskInputContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  addTask = () => {
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
        const lineBreakIndex = event.target.selectionStart;
        const title = state.input;
        return {
          input: title.slice(0, lineBreakIndex) + '\n' + title.slice(lineBreakIndex),
        }
      });
    }
  }

  render() {
    const { input } = this.state;
    return (
      <TaskInput
        input={input}
        addTask={this.addTask}
        inputChange={this.inputChange}
        enterPressed={this.enterPressed}
      />
    )
  }
}

export default TaskInputContainer
