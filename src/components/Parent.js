import React from "react";
import {Child} from './Child';

export class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        name: 'Frarthur'
    };
  };

  //passing props 
  render() {
    return (
        <Child name={this.state.name} />
    );
  }
}
