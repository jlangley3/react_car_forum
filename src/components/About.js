// src/About.js
import React from 'react';
// import biopicimg from '../public/images/biopicimg.jpg';

class About extends React.Component {
  render() {
    return (
      <section id="container-about" className="container-about">
              <h1>About Me</h1>

              <img src={'../public/images/biopicimg.jpg'} width="180" height="180" alt="abtimg"/>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
              </p>

      </section>
  )
  }
}

export default About;
