import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip'

import Main from './Main';
import '../../public/styles/App.css';

const NamePlate = ({ glow }) => (
  <div className={ 'namePlate ' + (glow ? 'glow' : 'nope') }>
    <p className='word' unselectable='on'>kraxx</p>
  </div>
)

class App extends Component {

  constructor() {
    super();
    this.state = {
      flipped : false,
      glow: false
    };
  }

  componentDidMount() {
    this.pulseText();
  }

  pulseText = () => {
    setInterval(() => {
      this.setState({
        glow: !this.state.glow
      })
      console.log("deez nuts")
    }, 1000);    
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
        <ReactCardFlip isFlipped={this.state.flipped}>
          <NamePlate key='front' glow={this.state.glow} />
          <Main key='back' />
        </ReactCardFlip>
      </div>
    );
  }
}

export default App;
