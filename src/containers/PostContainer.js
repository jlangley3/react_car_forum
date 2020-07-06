import React, {Component} from 'react'
import Posts from '../components/Posts'
import PostDetails from '../components/PostDetails'
import PostBar from '../components/PostBar'
import Comments from '../components/Comments'


const URL = "http://localhost:3000/posts"

export default class PostContainer extends Component {

            constructor(){
        super();
        this.state= {
            postsArray: [],
            subject: "",
            body: "",
            picture: "",
            user_id: 4
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
                 postsArray: postData,
                 body: "",
                 subject: "",
                 picture: ""
             })
         })
     }
          handleChange = (event) => {
              console.log("handle Change")
              this.setState({
                  [event.target.name]: event.target.value
              })
          }
          handleSubmit = (event) => {
              console.log("handle submit")
              event.preventDefault()
              this.addFetch()
          }

          addFetch = () => {
            console.log("You made it!")
            let {subject, body, picture} = this.state
            fetch(URL, {
                method: "POST",
                headers: {"Content-Type": "application/json", "Accept": "application/json"},
                body: JSON.stringify({
                      subject: subject,
                      body: body,
                      picture: picture,
                      user_id: 4
                   }
                )
            })
            .then(resp => resp.json())
            .then(newPost => 
                this.setState({
                        body: "",
                        subject: "",
                        picture: "",
                        postsArray: [newPost, ...this.state.postsArray]
                }))
        }

        render() {

       return (
           <div>
               <PostBar handleSubmit={this.handleSubmit} handleChange={this.handleChange} newPost={this.state}/>
            {this.state.postsArray.map(post => <Posts post={post} key={post.id}/>)}
            {/* <PostDetails />
            <Comments /> */}
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