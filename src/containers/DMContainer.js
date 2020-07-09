import React, {Component} from 'react'
import DMPreview from '../components/DMPreview'
import '../styles/DM.css';

const URL = "http://localhost:3000/users/my_messages/"
const userURL = "http://localhost:3000/users"
const mesgURL = "http://localhost:3000/messages/new"
const remarkURL = "http://localhost:3000/remarks"

export default class DMContainer extends Component {

    constructor(){
        super();
        this.state= {
            userDMs: [],
            showForm: false,
            message: "",
            friendID: null,
            users: [] // this populates with an array of user objects
        }
    }

    dmFetch = () => {
        // this returns an array of message objects.
        // serializes some information about the user and friend
        // mesg #=> {id: 21, user_id: 16, friend_id: 17, user: {first_name, username:}, friend: {first_name, username:} }

        fetch(URL + this.props.currentUser.id)
        .then(resp => resp.json())
        .then(data => {
            //console.log(data);
            this.setState({
                userDMs: data
            })
        })
        .then(() => this.userFetch())
        .then(() => console.log("QWERTYUOP", this.state))
    }

    userFetch = () => {
        // this is so we can populate the Username Select form
        // should probably make a simpler url that sends only usernames and ids
        fetch(userURL)
        .then(resp => resp.json())
        .then(data => {
            let removedSelf = data.filter(u => u.id != this.props.currentUser.id)
            // you cannot send a message to yourself! this isn't Slack.
            // we should remove people with whom you already have a message

            this.setState({
                users: removedSelf
            })
        })
    }

    componentDidMount() {
        this.dmFetch();
    }


    handleChange = (event) => {
        // console.log(event.target.type)
        if (event.currentTarget.type == 'select-one') {

            let newFriendID = this.state.users.filter(u => u.username == event.currentTarget.value)[0].id
            this.setState({friendID: newFriendID})

        }else {this.setState({
            [event.target.name]: event.target.value
        })}
    }

    handleAdd = (event) => { // this is complicated!
        event.preventDefault()
        fetch(mesgURL, { //identifies the correct message.id we need, which is required for a remark
            method: "POST",
            headers: {"Content-Type": "application/json", Accept: "application/json"},
            body: JSON.stringify({first_person: this.props.currentUser.id, second_person: this.state.friendID})
        })
        .then(res => res.json())
        .then(d => {
            //console.log("ALSO POSSIBLE", d)
            this.setState({userDMs: [...this.state.userDMs, d]})
            fetch(remarkURL, {
                method: "POST",
                headers: {"Content-Type": "application/json", Accept: "application/json"},
                body: JSON.stringify({
                    user_id: this.props.currentUser.id,
                    message_id: d.id, // here's why we called the first fetch call
                    body: this.state.message
                })
            })
            .then(res => res.json())
            .then(dTwo => {
                // console.log("WHAT I GET BACK", d)
                this.setState({message: ""})
            })
        })
    }

    handleToggle = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    }



    render() {

        return (
           <div className="container">
               <button className="btn" onClick={this.handleToggle}>Add DM</button>
               {this.state.showForm ?
                
            <div className="d-flex justify-content-center h-100">
                <div className="card convo">
                    <div className="card-header">
                        <h3>Create Message</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleAdd}>
                        {/* create */}
                            <div className="input-group form-group">
                            <div className="input-group-prepend">
                            </div>
                                <input onChange= {this.handleChange} name="message" value={this.state.message} type="text" className="form-control" placeholder="message"/>
                            </div>

                            <select name="cars" form="carform" className="custom-select" id="inputGroupSelect01" onChange={this.handleChange}>
                            {this.state.users.map(user => <option className="dropdown-item" value={user.username}>{user.username}</option>)}
                            </select>
                 
                            <div className="form-group">
                                <input type="submit" value="create" className="btn float-right login_btn"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        

               : null}

               {this.state.userDMs.map(dm => <DMPreview
                   key={dm.id}
                   currentUser={this.props.currentUser}
                   dm={dm}
                   handleChange={this.handleChange}
                   />)}
           </div>
       )

    }
}

 //   handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log("DM stuff", event.target)
    // //    this.testFetch()
    //     let {username, password} = this.state
    //     fetch(URL, {
    //         method: "POST",
    //         headers: {"Content-Type": "application/json", "Accept": "application/json"},
    //         body: JSON.stringify({
    //               username: username,
    //               "password_digest": password
    //            }
    //         )
    //     })
    //     .then(resp => resp.json())
    //     .then(console.log)
    //   }
// dmFetch = () => {
//     console.log("You made it!")
//     let {username, password} = this.state
//     fetch(URL + this.state.user_id, {
//         method: "POST",
//         headers: {"Content-Type": "application/json", "Accept": "application/json"},
//         body: JSON.stringify({
//               username: username,
//               password: password
//            }
//         )
//     })
//     .then(resp => resp.json())
//     .then(console.log)
// }
