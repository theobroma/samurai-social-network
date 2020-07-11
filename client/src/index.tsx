import React from 'react';
import { render } from 'react-dom';
import { App } from './#/App';
import * as serviceWorker from './serviceWorker';
// All styles
import './@assets/styles/index.scss';
import { ROLE } from './@types';
// Open Source typefaces
require('typeface-roboto');
require('typeface-gothic-a1');

const rootEl = document.getElementById('root');
// TODO: make role dynamic
render(<App userRole={ROLE.USER} />, rootEl);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
