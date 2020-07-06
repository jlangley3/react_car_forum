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
          to="/forum"
          exact
          className="link"
          activeStyle={{
            background: 'darkorange'
          }}
        >Forum</NavLink>
         <NavLink
          to="/posts"
          exact
          className="link"
          activeStyle={{
            background: 'darkorange'
          }}
        >Posts</NavLink>
        <NavLink
          to="/comments"
          exact
          className="link"
          activeStyle={{
            background: 'darkorange'
          }}
        >Comments</NavLink>
  {/* car search Form */}
         {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Find Cars" aria-label="Find"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
      </div>
    )
  }
}
 
export default NavBar;