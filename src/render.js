import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import {addpost} from './redux/state';

export let rerender=(state)=>{
ReactDOM.render(
  
  <React.StrictMode>
    <App appState={state} addpost={addpost}/>
  </React.StrictMode>,
  document.getElementById('root')
);
}

