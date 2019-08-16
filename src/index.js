import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContactsMain from './components/ContactsMain';
//import App from './App';
import Menu from './components/Menu';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Menu />, document.getElementById('menu'));

ReactDOM.render(<ContactsMain />, document.getElementById('contacts'));
//ReactDOM.render(<App />, document.getElementById('footer'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
