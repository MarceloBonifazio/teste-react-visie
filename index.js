import React from 'react';
import ReactDOM from 'react-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { payload } from './payload';

import payload from './payload';

import App from './App';

ReactDOM.render(
  <>
    <CssBaseline />
    <App data={payload} />
  </>,
document.getElementById('root'));
