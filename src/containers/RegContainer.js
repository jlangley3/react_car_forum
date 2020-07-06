import React, {Component} from 'react'
import Register from '../components/Register'


//const URL = "http://localhost:3000/api/v1/login"
const URL = "http://localhost:3000/users"

export default class RegContainer extends Component {

    constructor(){
        super();
        this.state= {
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            zip: "",
            password: ""

        }
 }

     testFetch = () => {
         console.log("You made it!")
         let {username, firstName, lastName, email, zip, password} = this.state
         fetch(URL, {
             method: "POST",
             headers: {"Content-Type": "application/json", "Accept": "application/json"},
             body: JSON.stringify({
                   username: username,
                   "first_name": firstName,
                   "last_name": lastName,
                   email: email,
                   zip: zip,
                   "password_digest": password
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
       this.testFetch()
      }

        render() {
       return (
           <div>
            <Register submit={this.handleSubmit} handleChange={this.handleChange} newUser={this.state}/>
           </div>
       )




    }
}
