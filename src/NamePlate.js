import React, { Component } from 'react';
import styles from './App.css';

export default () => (
  <div className='centralContainer'>
    <div className='wordContainer'>
      <p className='word'>{'kraxx'}</p>
    </div>
  </div>
)

// export default CSSModules(NamePlate, styles, { allowMultiple: true });

// const styles = {  
//   centralContainer: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     height: '80%',
//     width: '80%',
//     textAlign: 'center',
//     transform: 'translate(-50%, -50%)',
//     backgroundColor: 'black',
//     boxShadow: '1.5vmin 1.5vmin rgba(0,0,0,0.7)'
//   },
//   wordContainer: {
//     position: 'relative',
//     top: '50%',
//     transform: 'perspective(1px) translateY(-50%)'
//   },
//   word: {
//     fontSize: '20vmin',
//     color: 'white',
//     // fontFamily: 'Nanum Gothic',
//     // backgroundColor: 'white'
//   }
// }