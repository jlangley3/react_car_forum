// src/NavBar.js
import React from 'react'
import { NavLink } from 'react-router-dom';
 
const link = {
  width: '6rem',
  padding: '1rem',
  margin: '1rem 1rem 1rem 1rem',
  background: 'green',
  textDecoration: 'none',
  color: 'white',
  fontWeight: 'bold'
}
 
class NavBar extends React.Component {
  render() {
    return (
      <div>
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: 'darkorange'
          }}
        >Home</NavLink>
        <NavLink
          to="/about"
          exact
          style={link}
          activeStyle={{
            background: 'darkorange'
          }}
        >About</NavLink>
        <NavLink
          to="/login"
          exact
          style={link}
          activeStyle={{
            background: 'darkorange'
          }}
        >Login</NavLink>
      </div>
    )
  }
}
 
export default NavBar;