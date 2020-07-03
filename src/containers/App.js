import React from 'react';
import '../styles/App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Search from '../components/Search';
import About from '../components/About';
import DM from '../components/DM';
import LoginContainer from '../containers/LoginContainer'
import RegContainer from '../containers/RegContainer'
// import redVette from '../images/redVette.jpg'

class App extends React.Component {

  render(){
     return (
    <div className="App">
      <Router>
        <NavBar />
        <div >
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginContainer}/>
        <Route exact path="/register" component={RegContainer}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/search" component={Search}/>
        <Route exact path="/dm" component={DM}/>
        </div>
    </Router>
    </div>
  );
}
  }
 

export default App;
