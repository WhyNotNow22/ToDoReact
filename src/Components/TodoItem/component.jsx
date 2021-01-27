import React from 'react';
import './style.css';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: props.title,
      changeStatus: false,
    };
  };

  changeTask = (event) => {
    this.setState({ changeStatus: true });
  };

  stopChange = (event) => {
    this.setState({ changeStatus: false });
  };

  change = event => {
    if(this.state.changeStatus) 
      this.setState({ input: event.target.value });
  };

  render(){
    const   { deleteTask, raiseTask, dropTask } = this.props;
    return (
      <div className='TodoItem'>
        <textarea  className='Title' value={this.state.input} onChange={this.change} onBlur={this.stopChange} />
        <div className='ButtonsContainer'>
          <span className='Move' onClick={raiseTask}>∆</span>
          <span className='Change' onClick={this.changeTask}>✎</span>
          <span className='Move' onClick={dropTask}>∇</span>
          <span className='Delete' onClick={deleteTask}>✕</span>
        </div>
      </div>
    );
  }
};

export default TodoItem;
