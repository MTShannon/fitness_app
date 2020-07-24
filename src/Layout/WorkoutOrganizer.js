import React from 'react';
import './WorkoutOrganizer.css';
import ExerciseList from '../Exercises/ExerciseList';
import Exercise from '../Exercises/Exercise';

export default class WorkoutOrganizer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      exerciseList: [],
      showExercisePopUp: false,
      exercisePrimary: emptyExercise,
    };

    this.toggleExercisePopUp = this.toggleExercisePopUp.bind(this)
  }

  toggleExercisePopUp(event) {
    const details = !this.state.showExercisePopUp && event ? event.target.value : ''
    
    this.setState((prevState) => ({
      exerciseList: prevState.exerciseList,
      showExercisePopUp: !prevState.showExercisePopUp,
      exercisePrimary: details,
    }))
  }

  render () {
    return (
      <div>
        <ExerciseList
          exerciseList={this.state.exerciseList}
          openExercise = {this.toggleExercisePopUp}
          />
        {this.state.showExercisePopUp ?
        <Exercise
          details = {this.state.exercisePrimary}
          closeExercise = {this.toggleExercisePopUp}
          show = {this.state.showExercisePopUp}
        /> : null}
      </div>
    )
  }
}

const emptyExercise = {
  name: '',
  weight: '',
  set: '',
  reps: '',
  orm: '',
}
