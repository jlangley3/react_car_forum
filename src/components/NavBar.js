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
          className="link"
          activeStyle={{
            background: 'darkorange'
          }}
        >About</NavLink>
        <NavLink
          to="/login"
          className="link"
          activeStyle={{
            background: 'darkorange'
          }}
        >Login</NavLink>
         <NavLink
          to="/dm"
          className="link"
          activeStyle={{
            background: 'darkorange'
          }}
        >DM</NavLink>
          <NavLink
          to="/register"
          className="link"
          activeStyle={{
            background: 'darkorange'
          }}
        >Register</NavLink>
      </div>
    )
  }
}
 
export default NavBar;