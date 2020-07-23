import React from 'react';
import Exercise from './Exercise.js'
import './ExerciseList.css';


export default class ExerciseList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value : ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {

    this.props.addExer(this.state.value)
    event.preventDefault();
  }

  handleChange(event) {

    this.setState({
      value: event.target.value
    });
  }
  render () {
    const exerciseList = this.props.exerciseList
    const exerciseButtons = exerciseList.map((i) => {
      return (
        <li key={i}>
          <button onClick = {this.props.openExercise} >{i}</button>
        </li>
      );
    });

    return (
      <div className = 'exercises'>
        <form onSubmit={this.handleSubmit}>
          <button type = 'submit'>Add</button>
          <input
            type='text'
            placeholder='Add Exercise'
            value = {this.state.value}
            onChange={this.handleChange}
          />
        </form>
        <ul>{exerciseButtons}</ul>
      </div>
    );
  }
}
