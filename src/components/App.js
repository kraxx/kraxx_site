import React, { Component } from 'react';
// import ReactCardFlip from 'react-card-flip'

import Main from './Main';
import '../../public/styles/App.css';

const NamePlate = () => (
  <div className='wordContainer'>
    <p className='word' unselectable='on'>kraxx</p>
  </div>
)

class App extends Component {

  constructor() {
    super();
    this.state = { flipped : false };
  }

  handleClick = () => {
    if (this.state.flipped === false) {
      this.setState({ flipped: true });
    }
  }

  render() {
    const displayed = this.state.toggled ? 'none' : 'inline-block';
    return (
      <div className='centralContainer' onClick={() => this.handleClick()}>
      {this.state.flipped
        ? <Main />
        : <NamePlate />
      }
      {/*
        <ReactCardFlip isFlipped={this.state.flipped}>
          <NamePlate key='front' />
          <Main key='back' />
        </ReactCardFlip>
      */}
      </div>
    );
  }
}

export default App;
