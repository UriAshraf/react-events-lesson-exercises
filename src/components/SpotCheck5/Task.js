import React, { Component } from 'react';

class Task extends Component {
  complete = () => {
    this.props.markComplete(this.props.task.text)

  }

  render() {
    let t = this.props.task
    return (
      <div> 
        {t.text} - <button onClick={this.complete}>Complete</button>
      </div>
    )
  }
}

export default Task;
