import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Title from './function_components/title.js';
import Footer from './class_components/footer.js';
import reportWebVitals from './reportWebVitals';
import Router from './function_components/router'

ReactDOM.render(
  <React.StrictMode>
    <Title />
    <Router isLoggedin={false}/>
  <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
