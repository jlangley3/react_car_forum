import React from 'react';
import '../App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Login from '../components/Login';
import About from '../components/About';
import DM from '../components/DM';
import redVette from '../images/redVette.jpg'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div >
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/dm" component={DM}/>
        </div>
    </Router>
    </div>
  );
}

export default App;
