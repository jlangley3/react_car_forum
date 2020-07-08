// src/Profile.js
import React from 'react';
import '../styles/Main.css';
import logo from '../images/Cat.jpg';



class Profile extends React.Component {
  render() {
    return (
        <section className="container-banner">

                <div><img id="profilepic" src={logo}  width="170" height="170" alt="profilepic"/></div>
                <h1> Hi! Paul! This is your Profile</h1>
                <p id="paragarph1"> Full Stack Programmer <br/>
                I like long walks on the internet</p>
               
                
        </section>
    )
}
}
 
export default Profile;