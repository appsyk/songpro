import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import CuTube from './Cutube';
import App from './App';
// import Voice from './Voice';
// import Temp from './radios/index';
// import App from './components/App';
// import App from './reserveForm/App';

ReactDOM.render( <App />, document.getElementById('root'));

// ReactDOM.render(<Temp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
