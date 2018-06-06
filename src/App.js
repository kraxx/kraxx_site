import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { toggled : false };
  }

 toggleDisplay() {
    this.setState({
      toggled: !this.state.toggled
    })
  }

  render() {
    const displayed = this.state.toggled ? 'none' : 'block';
    return (
      <div style={styles.pageContainer}>
        <div style={styles.centralContainer}>
          <div
          style={{ 'display' : displayed }} 
          onClick={() => this.toggleDisplay()}>
            <h1>{'kraxx'}</h1>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  pageContainer: {
    width: '100vw',
    height: '100vh',
    verticalAlign: 'center',
    backgroundColor: 'red'
  },
  centralContainer: {
    display: 'fixed',
    top: '50%',
    left: '50%',
    textAlign: 'center',
    fontSize: '15vh',
    backgroundColor: 'blue',
  }
}

export default App;
