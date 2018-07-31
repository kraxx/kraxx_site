/*
** ReactCardFlip causing scroll issues in Firefox... nasty workaround implemented where I destroy the component after flipping
*/

import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip'

import Main from './Main';
import '../../public/styles/App.css';

/*
** APP: App container; contains components for nameplate (front) and main container (back)
*/

const NamePlate = ({ glow }) => (
  <div className={ 'namePlate ' + (glow ? 'glow' : 'nope') }>
    <p className='word' unselectable='on'>{'<kraxx/>'}</p>
  </div>
)

class App extends Component {

  constructor() {
    super();
    this.state = {
      flipped : false,
      flipping: false,
      destroyCard: false,
      glow: false
    };
  }

  componentDidMount() {
    this.pulseText();
  }

  pulseText = () => {
    if (this.state.flipped === false) {
      this.setState({
        glow: !this.state.glow
      });
      setTimeout(() => {
        this.pulseText();
      }, 2000);
    }  
  }

  handleClick = () => {
    if (this.state.flipped === false) {
      this.setState({
        flipped: true,
        flipping: true
      });
      setTimeout(() => {
        this.setState({
          flipping: false,
          destroyCard: true
        })
      }, 550);
    }
  }

  render() {
    return (
      <div
        className={ 'centralContainer ' + (this.state.flipping ? 'hiddenShadow' : '') }
        onClick={() => this.handleClick()}
      >
      {this.state.destroyCard ? (
        <Main />
      ) : (
        <ReactCardFlip isFlipped={this.state.flipped}>
          <NamePlate key='front' glow={this.state.glow} />
          <Main key='back' />
        </ReactCardFlip>
      )}
      </div>
    );
  }
}

export default App;