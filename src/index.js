import React from 'react';
import ReactDOM from 'react-dom';
import './styles/base/index.css';
import Index from './routes/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Index />, document.getElementById('root'));

serviceWorker.unregister();
