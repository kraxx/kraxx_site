import React, { Component } from 'react';
import NamePlate from './NamePlate';
import Main from './Main';
import '../public/styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { toggled : false };
  }

  handleClick = () => {
    this.setState({ toggled: true });
  }

  render() {
    const displayed = this.state.toggled ? 'none' : 'inline-block';
    return (
      <div className='centralContainer'>
      {this.state.toggled
        ? <Main />
        : <NamePlate callback={() => this.handleClick()}/>
      }
      </div>
    );
  }
}

export default App;
