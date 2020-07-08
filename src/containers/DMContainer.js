import React, {Component} from 'react'
import DMPreview from '../components/DMPreview'
import '../styles/Main.css';

const URL = "http://localhost:3000/users/my_messages/"
const userURL = "http://localhost:3000/users"
const mesgURL = "http://localhost:3000/messages/new"
const remarkURL = "http://localhost:3000/remarks"

export default class DMContainer extends Component {

    constructor(){
        super();
        this.state= {
            userID: null, //fix with authentication
            userDMs: [],
            showForm: false,
            message: "",
            friendID: null,
            users: [] // this populates with an array of user objects
        }
 }

     dmFetch = () => {
         console.log("dmFetch")
         fetch(URL + this.props.currentUser.id)
         .then(resp => resp.json())
         .then(data => {
             console.log(data);
             this.setState({
                 userDMs: data
             })
         })
     }

     userFetch = () => {
        console.log("dmFetch")
        fetch(userURL)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            this.setState({
                users: data
            })
        })
    }

     componentDidMount() {
         this.setState({userID: this.props.currentUser.id})
         this.dmFetch();
         this.userFetch()
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

      handleAdd = (event) => {
          event.preventDefault()
          fetch(mesgURL, {
              method: "POST",
              headers: {"Content-Type": "application/json", Accept: "application/json"},
              body: JSON.stringify({first_person: this.props.currentUser.id, second_person: this.state.friendID})
          })
          .then(res => res.json())
          .then(d => {
              fetch(remarkURL, {
                  method: "POST",
                  headers: {"Content-Type": "application/json", Accept: "application/json"},
                  body: JSON.stringify({
                      user_id: this.props.currentUser.id,
                      message_id: d.id,
                      body: this.state.message
                  })
              })
              .then(res => res.json())
              .then(console.log)
          })
      }

      handleToggle = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    }



        render() {

       return (
           <div className="projects">
               <button onClick={this.handleToggle}>Add DM</button>
               {this.state.showForm ?
                <div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
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
        </div>

               : null}

               {this.state.userDMs.map(dm => <DMPreview dm={dm} key={dm.id} handleChange={this.handleChange} user={dm.user.first_name} friend={dm.friend.first_name} friendID={dm.friend_id} userID={this.state.user_id}/>)}
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
