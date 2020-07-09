// src/Profile.js
import React from 'react';
import '../styles/Main.css';
import defaultProfile from '../images/Mario.jpeg';

class Profile extends React.Component {
  render() {
    return (
        <section className="container-banner">
                 <h1>PROFILE PAGE</h1>
                 <h2>Hello {this.props.currentUser.first_name}! </h2>
                <div><img id="profilepic" src={defaultProfile}  width="170" height="170" alt="profilepic"/></div>
                <h3>Welcome to your Car Facts profile.</h3>
                <p id="paragarph1">
                  
                {this.props.currentUser.bio}</p>

        </section>
    )
}
}

export default Profile;
