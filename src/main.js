/**
 *  The root of the whole app
 */
import React from 'react';
import Container from './components/Container';
// mannually adding loaders because
// we're loading .css in .js
import '!css!sass!./styles/app.scss';

React.render(<Container />, document.querySelector("#app"));
