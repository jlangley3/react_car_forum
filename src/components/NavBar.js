// src/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';
 
 
class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">           
        <NavLink
          to="/profile"
          exact 
          className="fa fa-fw fa-home"
          activeStyle={{
            color: 'limegreen'
          }}
        >Home</NavLink>
        <NavLink
          to="/about"
          exact
          className="fa fa-fw fa-xing"
          activeStyle={{
            color: 'limegreen'
          }}
        >About</NavLink>
        <NavLink
          to="/login"
          exact
          className="fa fa-fw fa-user"
          activeStyle={{
            color: 'limegreen'
          }}
        >Login</NavLink>
         <NavLink
          to="/dm"
          exact
          className="fa fa-fw fa-envelope"
          activeStyle={{
            color: 'limegreen'
          }}
        >DM</NavLink>
          <NavLink
          to="/register"
          exact
          className="fa fa-fw fa-xing"
          activeStyle={{
            color: 'limegreen'
          }}
        >Register</NavLink>
         <NavLink
          to="/search"
          exact
          className="fa fa-fw fa-xing"
          activeStyle={{
            color: 'limegreen'
          }}
        >Search</NavLink>
         <NavLink
          to="/posts"
          exact
          className="fa fa-fw fa-xing"
          activeStyle={{
            color: 'limegreen'
          }}
        >Forum</NavLink>
     
      </div>
    )
  }
}
 
export default NavBar;