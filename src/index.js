import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

/*
** Import and load FontAwesome icons into FontAwesome Library.
** They're pretty heavy...
*/
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab, far, fas);

ReactDOM.render(<App />, document.getElementById('root'));