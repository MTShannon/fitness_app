import React from 'react';
import './AddExercise.css';


export default class ExerciseList extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    return (
      <div className = 'addExercise'>
        <button value = 'add' onClick={this.props.openExercise}>Add Exercise</button>
      </div>
    );
  }
}
