import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as HashRouter, Route, Link } from 'react-router-dom';

ReactDOM.render(
<HashRouter>
    <App />
</HashRouter>, document.getElementById('root'));
registerServiceWorker();
