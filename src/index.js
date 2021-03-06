import React from 'react';
import ReactDOM from 'react-dom';
import AppMain from './components/app';
import reportWebVitals from './reportWebVitals';
import "../src/style/index.css"

ReactDOM.render(
  <React.Fragment>
    <React.StrictMode>
      <AppMain />
    </React.StrictMode>
  </React.Fragment>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
