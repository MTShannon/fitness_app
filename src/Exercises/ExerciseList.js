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
          <button onClick = {this.props.openExercise} value = {JSON.stringify(i)}>{i.name}</button>

        </li>
      );
    });

    return (
      <div className = 'exercises'>
        <ul>{exerciseButtons}</ul>
      </div>
    );
  }
}
