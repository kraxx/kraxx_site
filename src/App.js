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
    });
  }

  render() {
    const displayed = this.state.toggled ? 'none' : 'block';
    return (
      <div style={styles.pageContainer}>
        <div style={styles.centralContainer}
        onClick={() => this.toggleDisplay()}>
          <div style={{ 'display' : displayed }}>
            <p style={styles.word}>{'kraxx'}</p>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  pageContainer: {
    height: '100vh',
    width: '100vw',
    verticalAlign: 'center',
    backgroundColor: 'white'
  },
  centralContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: '50vh',
    width: '50vw',
    verticalAlign: 'center',
    textAlign: 'center',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'black',
  },
  word: {
    fontSize: '10vmin',
    color: 'black',
    backgroundColor: 'white'
  }
}

export default App;
