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
      exercisePrimary: '',
    };

    this.addExercise = this.addExercise.bind(this)
    this.toggleExercisePopUp = this.toggleExercisePopUp.bind(this)
  }

  addExercise() {
    const list = this.state.exerciseList.slice();
    this.toggleExercisePopUp()
  }

  createEmptyExercise() {
    const emptyExercise = {
      name: '',
      weight: '',
      set: '',
      reps: '',
      orm: '',
    }
  }

  toggleExercisePopUp(event = undefined) {
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
          addExer = {(exer) => this.addExercise(exer)}
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
