import React from 'react';
import Exercise from './Exercise.js'
import './ExerciseList.css';


export default class ExerciseList extends React.Component {

  constructor(props) {
    super(props);

    
  }

  render () {
    const exerciseList = this.props.exerciseList
    const exerciseButtons = exerciseList.map((i) => {
      return (
        <li key={i}>
          <button onClick = {this.props.openExercise} value = {i.name}>{i}</button>
        </li>
      );
    });

    return (
      <div className = 'exercises'>
        <button onClick={this.props.addExer}>Add Exercise</button>
        <ul>{exerciseButtons}</ul>
      </div>
    );
  }
}
