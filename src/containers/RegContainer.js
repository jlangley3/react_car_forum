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
         .then( data => {this.props.updateUser(data)})
        //  .then(data => {
        //      console.log(this.state.username, this.state.password, data)
        //      let {username, password} = this.state
        //      console.log(username, password)
        //      fetch("http://localhost:3000/api/v1/login", {
        //          method: "POST",
        //          headers: {"Content-Type": "application/json", "Accept": "application/json"},
        //          body: JSON.stringify({
        //              username: username,
        //              password: password
        //          })
        //      })
        //  })
        // .then(resp => resp.json())
        // .then(data => {
        //     localStorage.setItem('jwt', data.token)
        //     this.props.updateUser(data.user)
        // })
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
            window.location.replace('localhost:3000/login') //
        })
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
