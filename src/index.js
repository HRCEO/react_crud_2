import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function Home(){
    return (
        <div>
            <h2>Home</h2>
            Home...
        </div>
    )
}
function Topics(){
    return (
        <div>
            <h2>Topics</h2>
            Topics...
        </div>
    )
}
function Contact(){
    return (
        <div>
            <h2>Contact</h2>
            Contact...
        </div>
    )
}

function App(){
    return (
        <div>
            <h6>React Router DOM Example</h6>
        <ui>
            <li><a href="/">Home</a></li>
            <li><a href="/Topics">Topics</a></li>
            <li><a href="/Contact">Contact</a></li>
        </ui>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/topics"  element={<Topics/>}/>
            <Route path="/contact"  element={<Contact/>}/>
        </Routes>
        </div>
    )
}


ReactDOM.render(
    <BrowserRouter>
            <App />
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
