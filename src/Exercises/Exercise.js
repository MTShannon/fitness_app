import React from 'react';
import './Exercise.css'

export default class Exercise extends React.Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.props.closeExercise();
  }

  render() {
    return (
      <div
        className = {this.props.show ? 'fadeIn' : 'fadeOut'}>
        <div className = 'modal_content'>
          <p>{this.props.name}</p>
          <button onClick = {this.handleClick}>Close</button>
        </div>
      </div>
    );
  }
}
