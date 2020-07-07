// src/NavBar.js
import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css'
 
 
class NavBar extends React.Component {
  render() {
    return (
      <div className="nav">
        <NavLink
          to="/"
          exact
          className="link"
          activeStyle={{
            background: 'darkorange'
          }}
        >Home</NavLink>
        <NavLink
          to="/about"
          exact
          className="link"
          activeStyle={{
            background: 'darkorange'
          }}
        >About</NavLink>
        <NavLink
          to="/login"
          exact
          className="link"
          activeStyle={{
            background: 'darkorange'
          }}
        >Login</NavLink>
         <NavLink
          to="/dm"
          exact
          className="link"
          activeStyle={{
            background: 'darkorange'
          }}
        >DM</NavLink>
          <NavLink
          to="/register"
          exact
          className="link"
          activeStyle={{
            background: 'darkorange'
          }}
        >Register</NavLink>
         <NavLink
          to="/search"
          exact
          className="link"
          activeStyle={{
            background: 'darkorange'
          }}
        >Search</NavLink>
         <NavLink
          to="/posts"
          exact
          className="link"
          activeStyle={{
            background: 'darkorange'
          }}
        >Forum</NavLink>
     
      </div>
    )
  }
}
 
export default NavBar;