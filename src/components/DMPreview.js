// src/DM.js
import React from 'react'
// import { NavLink } from 'react-router-dom';
import '../styles/DM.css'
import DM from './DM'

export default class DMPreview extends React.Component {

    constructor() {
        super()
        this.state = {
            toggle: false
        }
    }

    handleClick = () => {
        let newBool = !this.state.toggle
        this.setState({toggle: newBool})
    }

    render() {
        // console.log("DM PREVIEW PROPS!", this.props)
        // let {friend, friendID, user, userID} = this.props.dm
        console.log("PREVIEW INFO", this.props)
        return (
            <div className="container-banner">
            <br/>
            <div className="container">
            <button onClick={this.handleClick}> conversation between {this.props.dm.friend.username} and {this.props.dm.user.username} </button>
            {this.state.toggle ? <DM currentUser={this.props.currentUser} dm={this.props.dm} /> : null }

            </div>
            </div>
            )
        }
    }
    //{this.state.toggle ? <DM user={userID} friend={friendID} /> : null }
