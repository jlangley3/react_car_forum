// src/Profile.js
import React from 'react';
import '../styles/Main.css';
import defaultProfile from '../images/default-profile.png';

class Profile extends React.Component {
  render() {
    return (
        <section className="container-banner">

                <div><img id="profilepic" src={defaultProfile}  width="170" height="170" alt="profilepic"/></div>
                <h1> Hi! I am {this.props.currentUser.username}! Welcome to my Car Max profile. </h1>
                <p id="paragarph1">
                {this.props.currentUser.bio}</p>

        </section>
    )
}
}

export default Profile;
