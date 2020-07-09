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
            <div>
            <div className="container-banner">
                <h2><i class="fa fa-comment" aria-hidden="true"></i></h2>
            <br/>
            <div className="card g">
            <span className="names"> Convo w/ {this.props.currentUser.username === this.props.dm.user.username ? this.props.dm.friend.username : this.props.dm.user.username} </span>
            <button className="btn" onClick={this.handleClick}> Convo </button>
            </div>
             <div className="card g">
            {this.state.toggle ? <DM currentUser={this.props.currentUser} dm={this.props.dm} /> : null }
             </div>
            </div>
            </div>
            )
        }
    }
    //{this.state.toggle ? <DM user={userID} friend={friendID} /> : null }
