import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

/* Import and load FontAwesome icons into FontAwesome Library */
import {
  faCodepen,
  faFreeCodeCamp,
  faGithub,
  faGithubSquare,
  faLinkedin,
  faGooglePlay
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(
  faCodepen,
  faFreeCodeCamp,
  faGithub,
  faGithubSquare,
  faLinkedin,
  faGooglePlay,
  faGlobe
);

ReactDOM.render(<App />, document.getElementById('root'));