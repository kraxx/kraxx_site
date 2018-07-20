import React, { Component } from 'react';
import '../public/styles/Main.css';

const Header = () => (
  <div className='headerContainer'>
    <header>
      kraxx + links to stuff
    </header>
    <hr />
  </div>
)

class Main extends Component {

  render() {
    return (
      <div className='mainContainer'>
        <Header />
        <body>
          a router of sorts
        </body>
      </div>
    )
  }
}

export default Main;