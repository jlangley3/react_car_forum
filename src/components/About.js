// src/About.js
import React from 'react';
import '../styles/Main.css';
import car from '../images/462303.jpg';

class About extends React.Component {
  render() {
    return (
      <section id="container-banner" className="container-banner">

              <img src={car} width="600" alt="abtimg"/>
              <p>  Welcome to the premiere car forum on the Internet
              </p>

      </section>
  )
  }
}

export default About;
