import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Kennel from './components/Kennel';

ReactDOM.render(<Kennel />, document.getElementById('root'));
registerServiceWorker();
