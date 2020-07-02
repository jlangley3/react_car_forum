import React, {Component} from 'react'
import Login from '../components/Login'

const URL = "http://localhost:3000/api/v1/users"

export default class LoginContainer extends Component {

    constructor(){
        super();
        this.state= {
            users: [],
            currentUser: null
        }
 }

     testFetch = () => {
         console.log("You made it!")
         fetch(URL, {
             method: "POST",
             headers: {"Content-Type": "application/json", "Accept": "application/json"},
             body: JSON.stringify({
                   username: "Nance1973",
                   "first_name": "Jim",
                   "last_name": "Nance",
                   email: "jim@email.com",
                   bio: "a Sir",
                   zip: "20033",
                   "password_digest": "foot$33"
                }
             )
         })
         .then(resp => resp.json())
         .then(console.log)
     }
     componentDidMount(){
        // this.testFetch()
     }

        render() {
       return (
           <div>
            <Login />
           </div>
       )




    }
}