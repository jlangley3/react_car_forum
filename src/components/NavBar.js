// src/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/Nav.css';

class NavBar extends React.Component {

    handleLogout = () => {
        localStorage.clear()
        this.props.updateUser(null)
    }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/"><Header/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
          <NavLink
              to="/profile"
              exact
              className="fa fa-home"
              activeStyle={{
                color: 'limegreen'
              }}
            >Home</NavLink>
          </li>
          <li className="nav-item">
          <NavLink
              to="/about"
              exact
              className="fa fa-book"
              activeStyle={{
                color: 'limegreen'
              }}
            >About</NavLink>
          </li>
          <li className="nav-item active">
          {this.props.currentUser ? null : <NavLink
              to="/register"
              exact
              className="fa fa-xing"
              activeStyle={{
                color: 'limegreen'
              }}
            >Login</NavLink>}
          </li>
          <li className="nav-item active">
          {this.props.currentUser ? <NavLink
              to="/dm"
              exact
              className="fa fa-envelope"
              activeStyle={{
                color: 'limegreen'
              }}
            >DM</NavLink> : null }
          </li>
          <li className="nav-item active">
          {this.props.currentUser ? null : <NavLink
              to="/register"
              exact
              className="fa fa-xing"
              activeStyle={{
                color: 'limegreen'
              }}
            >Register</NavLink>}
          </li>
          <li className="nav-item active">
          {this.props.currentUser ? <NavLink
              to="/posts"
              exact
              className="fa fa-car"
              activeStyle={{
                color: 'limegreen'
              }}
            >Forum</NavLink> : null }
          </li>
          <li className="nav-item active">
          {this.props.currentUser ? <NavLink
                to="/login" exact
                onClick={this.handleLogout}
                className="fa fa-sign-out">
            Logout</NavLink> : null }
          </li>
        </ul>
      </div>
      </nav>
    )
  }
}

export default NavBar;
