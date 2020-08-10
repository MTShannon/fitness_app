import React from 'react';
import './Exercise.css'
import Progression from './Progression.js'

export default class Exercise extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      name: this.props.details.name,
      weight: this.props.details.weight,
      sets: this.props.details.sets,
      reps: this.props.details.sets,
      orm: this.props.details.orm,
      progression: this.props.details.progression
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    if (this.props.new) {
      this.props.addExercise(this.state)
    }

    this.props.closeExercise(event);
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState( {
      [name]: value
    })
  }



  render() {
    return (
      <div
        className = {this.props.show ? 'fadeIn' : 'fadeOut'}>
        <div className = 'modal_content'>
          <form onSubmit = {this.handleSubmit}>
            <input
              className='exercise_title'
              type='text'
              placeholder='Exercise Name'
              name = 'name'
              value = {this.state.name}
              onChange={this.handleChange}
            />
            <input
              type='number'
              placeholder='Weight'
              name = 'weight'
              value = {this.state.weight}
              onChange={this.handleChange}
            />
            <input
              type='number'
              placeholder='Sets'
              name = 'sets'
              value = {this.state.sets}
              onChange={this.handleChange}
            />
            <input
              type='number'
              placeholder='Reps'
              name = 'reps'
              value = {this.state.reps}
              onChange={this.handleChange}
            />
            <input
              type='number'
              placeholder='One Rep Max'
              name = 'orm'
              value = {this.state.orm}
              onChange={this.handleChange}
            />
            <label> Progression:
              <select name='progression' value = {this.state.progression} onChange={this.handleChange}>
                <option value='Linear'>Linear</option>
                <option value='None'>None</option>
              </select>
            </label>

            {this.state.progression != '' ?
             <Progression
                type = {this.state.progression}
              />
              : null }
              
            <button className = 'submitButton' type = 'submit'>Close</button>
          </form>
        </div>
      </div>
    );
  }
}
