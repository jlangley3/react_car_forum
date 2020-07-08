import React, {Component} from 'react'
import Search from '../components/Search'



// const URL = "http://localhost:3000/api/v1/profile"

export default class SearchContainer extends Component {

    constructor(){
        super();
        this.state= {
            details: [  ]

        }
    }

    render() {
        return (
            <div>
            <Search/>

            </div>
        )
    }
}



//      testFetch = () => {
//          console.log("You made it!")
//          let {username, password} = this.state
//          fetch(URL, {
//              method: "POST",
//              headers: {"Content-Type": "application/json", "Accept": "application/json"},
//              body: JSON.stringify({
//                    username: username,
//                    "password_digest": password
//                 }
//              )
//          })
//          .then(resp => resp.json())
//          .then(console.log)
//      }


//      handleChange = (event) => {
//         this.setState({
//           [event.target.name]: event.target.value
//         })
//       }

//       handleSubmit = (event) => {
//         event.preventDefault();
//         console.log("Login stuff", event.target)
//     //    this.testFetch()
//       }
