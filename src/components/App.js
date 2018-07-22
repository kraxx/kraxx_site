import React, { Component } from 'react';
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
    this.state = { toggled : false };
  }

  handleClick = () => {
    if (this.state.toggled === false) {
      this.setState({ toggled: true });
    }
  }

  render() {
    const displayed = this.state.toggled ? 'none' : 'inline-block';
    return (
      <div className='centralContainer' onClick={() => this.handleClick()}>
      {this.state.toggled
        ? <Main />
        : <NamePlate />
      }
      </div>
    );
  }
}

export default App;
