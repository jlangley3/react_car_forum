import React from 'react';
import '../styles/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Switch, Redirect, withRouter } from 'react-router-dom'
import NavBar from '../components/NavBar';
import PostContainer from '../containers/PostContainer';
import About from '../components/About';
import DMContainer from '../containers/DMContainer';
import LoginContainer from '../containers/LoginContainer'
import RegContainer from '../containers/RegContainer'
import SearchContainer from './SearchContainer';
import Comments from '../components/Comments';
import PostDetails from '../components/PostDetails';

// import redVette from '../images/redVette.jpg'

class App extends React.Component {

  render(){
     return (
    <div className="App">
      <Router>
        <NavBar />
        <div >
          <Switch>
       
        <Route exact path="/login" component={LoginContainer}/>
        <Route exact path="/register" component={RegContainer}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/search" component={SearchContainer}/>
        <Route exact path="/dm" component={DMContainer}/>
        <Route path={`/posts/:postId`} component={PostDetails} /> 
        <Route exact path="/posts" component={PostContainer}/>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="*" component={LoginContainer}/>
        </Switch>
        </div>
    </Router>
    </div>
  );
}
  }


export default App;
