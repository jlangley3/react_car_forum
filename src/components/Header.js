import React, { Component } from 'react'
import '../styles/Main.css';

class Header extends Component {
    render() {
        return (
            <div id="home">   
                <i class="fa fa-car fa fa-3x" aria-hidden="true"></i>
                 <span className="header-h1">Car Facts</span>
            </div>
        )
    }
}

export default Header
