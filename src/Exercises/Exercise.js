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
          <form>
            <input
              className='exercise_title'
              type='text'
              placeholder='Exercise Name'
              value = {this.props.details.name}
              onChange={this.handleChange}
            />
            <input
              type='number'
              placeholder='Weight'
              value = {this.props.details.weight}
              onChange={this.handleChange}
            />
            <input
              type='number'
              placeholder='Sets'
              value = {this.props.details.sets}
              onChange={this.handleChange}
            />
            <input
              type='number'
              placeholder='Reps'
              value = {this.props.details.reps}
              onChange={this.handleChange}
            />
            <input
              type='number'
              placeholder='One Rep Max'
              value = {this.props.details.orm}
              onChange={this.handleChange}
            />
            <button onClick = {this.handleClick}>Close</button>
          </form>
        </div>
      </div>
    );
  }
}
