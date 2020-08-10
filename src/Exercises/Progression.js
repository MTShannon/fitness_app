import React from 'react';
import './Progression.css'


export default class Progression extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <p>{this.props.type}</p>
    );
  }
}
