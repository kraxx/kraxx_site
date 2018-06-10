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
    const displayed = this.state.toggled ? 'none' : 'inline-block';
    return (
      <div style={styles.pageContainer}>
        <div style={styles.centralContainer}
        onClick={() => this.toggleDisplay()}>
          <div style={{...styles.wordContainer, 'display': displayed}}>
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
    // margin: '10%',
    height: '80%',
    width: '80%',
    textAlign: 'center',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'black',
    boxShadow: '1.5vmin 1.5vmin rgba(0,0,0,0.7)'
  },
  wordContainer: {
    // margin: '0 auto',
    // verticalAlign: 'center',
    // backgroundColor: 'grey',
    position: 'relative',
    top: '50%',
    transform: 'perspective(1px) translateY(-50%)'
  },
  word: {
    fontSize: '20vmin',
    color: 'white',
    // fontFamily: 'Nanum Gothic',
    // backgroundColor: 'white'
  }
}

export default App;
