import React from 'react'
import './style.css'

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textAreaTitle: props.title,
      changeStatus: false,
    };
  }

  changeTask = event => {
    this.setState({ changeStatus: true });
    let task = event.target.closest('DIV').previousElementSibling;
    task.closest('DIV').style.border = '2px solid orange';
    task.focus();
  }

  stopChange = event => {
    event.target.closest('DIV').style.border = '2px solid green';
    this.setState({ changeStatus: false });
  }

  change = event => {
    event.target.style.height = 'inherit';
    event.target.style.height = `${event.target.scrollHeight}px`;
    if (this.state.changeStatus) {
      this.setState({ textAreaTitle: event.target.value });
    }
  }

  render() {
    const { deleteTask, moveTask, height } = this.props;
    const { textAreaTitle, changeStatus } = this.state;
    return (
      <div className='todo-item'>
        <textarea
          readOnly={!changeStatus}
          className='title'
          value={textAreaTitle}
          style={{ height: `${height}px` }}
          onChange={this.change}
          onBlur={this.stopChange}
        />
        <div className='buttons-container'>
          <span className='move' onClick={moveTask}>∆</span>
          <span className='change' onClick={this.changeTask}>✎</span>
          <span className='move' onClick={moveTask}>∇</span>
          <span className='delete' onClick={deleteTask}>✕</span>
        </div>
      </div>
    )
  }
}

export default TodoItem
