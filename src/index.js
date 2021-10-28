import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';

export let _callSubscriber = (state) => {
    ReactDOM.render(
    <React.StrictMode>
        <App appState={state} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
    );
}

_callSubscriber(store.getState());

store.subscribe(_callSubscriber);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();

