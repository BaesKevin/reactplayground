import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import FirebaseDatabase from './firebase/FirebaseDatabase'
import firebaseConfig from './firebase.config'

const db = new FirebaseDatabase(firebaseConfig);


ReactDOM.render(<App db={db} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
