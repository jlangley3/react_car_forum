import React, {Component} from 'react'
import Posts from '../components/Posts'
import Details from '../components/Details'


const URL = "http://localhost:3000/posts"

export default class PostContainer extends Component {

            constructor(){
        super();
        this.state= {
            postsArray: [  ]
            
        }
 }

componentDidMount() {
    this.testFetch()
}

      testFetch = () => {
         console.log("You made it!")
         let {username, password} = this.state
         fetch(URL)
         .then(resp => resp.json())
         .then(postData => {
             this.setState({
                 postsArray: postData
             })
         })
     }


        render() {

       return (
           <div>
            {this.state.postsArray.map(post => <Posts post={post} key={post.id}/>)}
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