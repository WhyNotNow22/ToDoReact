import React from 'react';
import './style.css';


class TaskInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };
  }

  addTask = () => {
    const { input } = this.state;
    if (input) {
      this.props.addTask(input); 
      this.setState({ input: '' });
    }
  };

  inputChange = event => {
    this.setState({ input: event.target.value });
  };

  render() {
    const { input } = this.state;
    return (
      <div className='TaskInput'>
        <input value={input} onChange={this.inputChange} className='InputField' />
        <button onClick={this.addTask} className='AddButton'>Apply</button>
      </div>
    );
  };
};

export default TaskInput;