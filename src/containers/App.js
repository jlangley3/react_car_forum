import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Login from '../components/Login';
import About from '../components/About';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/about" component={About}/>
       
        </div>
      
    </Router>
    </div>
  );
}

export default App;
