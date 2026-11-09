import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { unregister } from './registerServiceWorker';

import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

// No service worker: its scope is the whole pyozer.github.io origin, so it served this app's
// index.html (and its 404 page) for the project sites under /<repo>/, e.g. /ha-live-energy-card/.
// Calling unregister() also removes the worker from browsers that already installed it.
unregister();