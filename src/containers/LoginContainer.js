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

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Login stuff", event.target)

        //let {username, password} = this.state
        fetch(URL, {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify(this.state)
    })
    .then(resp => resp.json())
    .then(data => {
        if (data.error) {
            alert(data.message)
        } else {
            localStorage.setItem('jwt', data.token)
            console.log("QWERTY", data)
            this.props.updateUser(data.user)
        }

    })
}

render() {
    return (
        <div>
        <Login submit={this.handleSubmit} handleChange={this.handleChange} newUser={this.state}/>
        </div>
    )




}
}
