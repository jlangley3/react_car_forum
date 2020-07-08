import React, { Fragment } from 'react';
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
import Profile from '../components/Profile';
import PostDetails from '../components/PostDetails';
import DM from '../components/DM';
import Header from '../components/Header';

// import redVette from '../images/redVette.jpg'

class App extends React.Component {
    constructor() {
        super()
        this.state = {currentUser: null}
    }

    componentDidMount() {
        // console.log("APP DID MOUNT 1")
        if (localStorage.getItem('jwt')){
            console.log("JWT FOUND")
            fetch("http://localhost:3000/api/v1/token", {
                method: "GET",
                headers: {
                    "Authentication": localStorage.getItem("jwt")
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log("APP DID MOUNT 2", data) //works
                this.updateUser(data)
            })
        }
    }

    updateUser = (user) => {
        this.setState({currentUser: user})
    }

    render(){
        return (
            <div className="App">
            <Router>
            <Header />
            <NavBar updateUser={this.updateUser} currentUser={this.state.currentUser}/>
            <br />
            <div >
            <Switch>
                 <Route exact path="/" render={() => <Redirect to="/login" />} />
                 <Route exact path="/profile" render={() =>
                     this.state.currentUser ? <Profile
                        currentUser={this.state.currentUser} />:
                        <Redirect to="/login" />
                    } />
                <Route exact path="/login" render={() =>
                    this.state.currentUser ?
                    <Redirect to="/profile"/> :
                <LoginContainer updateUser={this.updateUser}/>
          } />
                <Route exact path="/register" render={ () => <RegContainer updateUser={this.updateUser} />}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/search" component={SearchContainer}/>



                <Route exact path="/dm" render={ () =>
                    this.state.currentUser ?
                        <DMContainer currentUser={this.state.currentUser} />
                        :
                        <Redirect to="/login" />}/>
                <Route exact path="/my_messages" render={ () =>
                    this.state.currentUser ?
                        <DM currentUser={this.state.currentUser} />
                        :
                        <Redirect to="/login" />}/>
                <Route path={`/posts/:postId`} render={ () =>
                    this.state.currentUser ?
                        <PostDetails currentUser={this.state.currentUser} />
                        :
                        <Redirect to="/login" />}/>
                <Route exact path="/posts" render={ () =>
                    this.state.currentUser ?
                        <PostContainer currentUser={this.state.currentUser} />
                        :
                        <Redirect to="/login" />}/>

                <Route path="*" component={LoginContainer}/>
            </Switch>
            </div>
            </Router>
            </div>
        );
    }
}


export default App;


      //       {this.state.currentUser ? }
      //        <Route exact path="/profile" render={() =>
      //   this.state.currentUser ? <Profile
      //     currentUser={this.state.currentUser} />:
      //     <Redirect to="/login" />
      // } />
