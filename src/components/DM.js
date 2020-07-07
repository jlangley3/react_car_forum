import React from 'react'
// import { NavLink } from 'react-router-dom';
import '../styles/DM.css'

const URL = "http://localhost:3000/messages/new"

export default class DM extends React.Component {
    constructor(){
        super();
        this.state= {
            remarks: []
        }
    }

    componentDidMount() {
        // console.log("DM COMPONENT DID MOUNT", this.props.user, this.props.friend)
        fetch(URL, {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify({
                first_person: this.props.user,
                second_person: this.props.friend
            }
        )
    })
    .then(resp => resp.json())
    .then(data => {
        let newRemarks = data.remarks
        this.setState({remarks: newRemarks})})
        .then(console.log(this.state.remarks))
        //
    }

    itsOwnThing = () => {
        return (
          <div>
               {this.state.remarks.map(r => <p> {r.body} </p>)} 
               {/* style this for real css align based on speaker (like on a chat app) */}
            
          </div>
          
        
        
        ) 

    }

    render() {return <h2>{this.itsOwnThing()}</h2>  }
}
