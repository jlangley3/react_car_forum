import React, {Component} from 'react'
import Posts from '../components/Posts'
import PostDetails from '../components/PostDetails'
import PostBar from '../components/PostBar'


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
         fetch(URL)
         .then(resp => resp.json())
         .then(postData => {
             this.setState({
                 postsArray: postData
             })
         })
     }
          handleChange = () => {
              console.log("handle Change")
          }
          handleSubmit = () => {
              console.log("handle submit")
          }

        render() {

       return (
           <div>
               <PostBar handleSubmit={this.handleSubmit} handleChange={this.handleChange} state={this.state}/>
            {this.state.postsArray.map(post => <Posts post={post} key={post.id}/>)}
            <PostDetails />
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