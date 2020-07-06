import React, {Component} from 'react'
import Login from '../components/Login'


const URL = "http://localhost:3000/api/v1/login"

export default class LoginContainer extends Component {

    constructor(){
        super();
        this.state= {
            username: "",
            password: ""

        }
 }

     testFetch = () => {
         console.log("You made it!")
         let {username, password} = this.state
         fetch(URL, {
             method: "POST",
             headers: {"Content-Type": "application/json", "Accept": "application/json"},
             body: JSON.stringify({
                   username: username,
                   password: password
                }
             )
         })
         .then(resp => resp.json())
         .then(console.log)
     }


     handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleSubmit = (event) => {
        event.preventDefault();
        console.log("Login stuff", event.target)
    //    this.testFetch()
        let {username, password} = this.state
        fetch(URL, {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify({
                  username: username,
                  "password_digest": password
               }
            )
        })
        .then(resp => resp.json())
        .then(console.log)
      }

        render() {
       return (
           <div>
            <Login submit={this.handleSubmit} handleChange={this.handleChange} newUser={this.state}/>
           </div>
       )




    }
}
