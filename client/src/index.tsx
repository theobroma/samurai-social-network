import React from 'react';
import { render } from 'react-dom';
import App from './#/App';
import * as serviceWorker from './serviceWorker';
// All styles
import './@assets/styles/index.scss';
// Open Source typefaces
require('typeface-roboto');
require('typeface-gothic-a1');

const rootEl = document.getElementById('root');
render(<App />, rootEl);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
