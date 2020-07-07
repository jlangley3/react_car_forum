import React, {Component} from 'react'
import DM from '../components/DM'


const URL = "http://localhost:3000/users/my_messages/"

export default class DMContainer extends Component {

    constructor(){
        super();
        this.state= {
            user_id: 7, //fix with authentication
            userDMs: []

        }
 }

     dmFetch = () => {
         console.log("dmFetch")
         fetch(URL + this.state.user_id)
         .then(resp => resp.json())
         .then(data => {
             this.setState({
                 userDMs: data
             })
         })
     }

     componentDidMount() {
         this.dmFetch()
     }



     handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

   

        render() {
       return (
           <div>
               {this.state.userDMs.map(dm => <DM dm={dm} key={dm.id} handleChange={this.handleChange} friendID={dm.friend_id} userID={this.state.user_id}/>)}
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