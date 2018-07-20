import React from 'react';
import '../public/styles/NamePlate.css';

export default ({ callback }) => (
  <div className='wordContainer' onClick={ () => callback() }>
    <p className='word' unselectable='on'>kraxx</p>
  </div>
)
