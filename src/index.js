import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Greeting from './components/Greeting';
import Counter  from './components/Counter';
import CounterOld from './components/CounterOld';
import reportWebVitals from './reportWebVitals';

const information  = {firstName: 'emma', lastName: 'Hidalgo'};

ReactDOM.render(
  <React.StrictMode>
    <Greeting userInfo={information} />
    <Counter initialValue={10}  />
    <CounterOld  />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
