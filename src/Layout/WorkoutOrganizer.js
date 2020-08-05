import React from 'react';
import './WorkoutOrganizer.css';
import ExerciseList from '../Exercises/ExerciseList';
import Exercise from '../Exercises/Exercise';
import AddExercise from '../Exercises/AddExercise'

export default class WorkoutOrganizer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      exerciseList: [{name: 'test', weight: 2}],
      showExercisePopUp: false,
      exercisePrimary: emptyExercise,
    };

    this.addExercise = this.addExercise.bind(this)
    this.closePopUp = this.closePopUp.bind(this)
    this.openPopUp = this.openPopUp.bind(this)
  }

  addExercise(event) {
    const currentList = this.state.exerciseList.slice()
    const updatedList = currentList.concat([event])
    this.setState((prevState) => ({
      exerciseList: updatedList,
      showExercisePopUp: prevState.showExercisePopUp,
      exercisePrimary: event,
    }))
  }

  // possibly refactor closePopUp and openPopUp
  closePopUp(event) {
    const details = event.target.value
    this.setState((prevState) => ({
      exerciseList: prevState.exerciseList,
      showExercisePopUp: false,
      exercisePrimary: details,
    }))
  }

  openPopUp(event) {
    const details = event.target.value == 'add' ? emptyExercise : JSON.parse(event.target.value)
    this.setState((prevState) => ({
      exerciseList: prevState.exerciseList,
      showExercisePopUp: true,
      exercisePrimary: details,
    }))
  }

  render () {
    return (
      <div>
        <AddExercise
          addExercise = {this.addExercise}
          openExercise = {this.openPopUp}
        />
        <ExerciseList
          exerciseList={this.state.exerciseList}
          openExercise = {this.openPopUp}
          />
        {this.state.showExercisePopUp ?
        <Exercise
          details = {this.state.exercisePrimary}
          closeExercise = {this.closePopUp}
          show = {this.state.showExercisePopUp}
          new = {this.state.exercisePrimary === emptyExercise}
          addExercise = {this.addExercise}
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
