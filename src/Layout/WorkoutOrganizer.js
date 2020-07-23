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
    };

    this.addExercise = this.addExercise.bind(this)
    this.toggleExercisePopUp = this.toggleExercisePopUp.bind(this)
  }

  addExercise(exer) {
    const list = this.state.exerciseList.slice();
    const newList = list.concat([exer])
    const prevPopUp = this.state.showExercisePopUp
    this.setState({
      exerciseList: newList,
      showExercisePopUp: prevPopUp
    })
  }

  toggleExercisePopUp() {
    this.setState((prevState) => ({
      exerciseList: prevState.exerciseList,
      showExercisePopUp: !prevState.showExercisePopUp
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
          name = 'red'
          closeExercise = {this.toggleExercisePopUp}
          show = {this.state.showExercisePopUp}
        /> : null}
      </div>
    )
  }
}
