import React, { Component } from 'react';
import NamePlate from './NamePlate';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { toggled : false };
  }

  render() {
    const displayed = this.state.toggled ? 'none' : 'inline-block';
    return (
      <div className='pageContainer'>
        <NamePlate />
      </div>
    );
  }
}

export default App;
