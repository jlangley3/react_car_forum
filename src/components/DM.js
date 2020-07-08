import React from 'react'
// import { NavLink } from 'react-router-dom';
import '../styles/DM.css'


const URL = "http://localhost:3000/messages/new"

export default class DM extends React.Component {
    constructor(){
        super();
        this.state= {
            remarks: []
            //toggle: false
        }
    }

    componentDidMount() {
        console.log("DM COMPONENT DID MOUNT", this.props.dm.user_id, this.props.dm.friend_id)
        fetch(URL, {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify({
                first_person: this.props.dm.user_id,
                second_person: this.props.dm.friend_id
            }
        )
    })
    .then(resp => resp.json())
    .then(data => {
        console.log("DATA! >>> ", data)
        let newRemarks = data.remarks
        this.setState({remarks: newRemarks})})
    .then(console.log(this.state.remarks))
        //
    }

    itsOwnThing = () => {
        console.log(this.state.remarks)
        return (
          <div>
               {this.state.remarks.map(r => <p> {r.user_id}: {r.body} </p>)}
               {/* style this for real css align based on speaker (like on a chat app) */}
               {/*if (r.user_id == this.props.currentUser.id) {
                   style in blue
               } else {
                    style in grey
                }
                   */}
          </div>

        )

    }

    render() {return <h2>{this.itsOwnThing()}</h2>  }
}
//{this.itsOwnThing()}
