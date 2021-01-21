import React, {Component} from 'react'
import Register from '../components/Register'
import { Redirect } from 'react-router-dom'


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

    postNewUsertoDB = () => {
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
         .then( data => {this.props.updateUser(data);
            })
    
        .then(() => {
            this.setState({
                username: "",
                firstName: "",
                lastName: "",
                email: "",
                zip: "",
                password: ""
            })
        })
        .then(x => {
            return <Redirect to='/about' /> // look into this.
        })
     }

    


     handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleSubmit = (event) => {
        event.preventDefault();
        this.postNewUsertoDB()
      }

        render() {
       return (
           <div>
            <Register submit={this.handleSubmit} handleChange={this.handleChange} newUser={this.state}/>
           </div>
       )

    }
}
