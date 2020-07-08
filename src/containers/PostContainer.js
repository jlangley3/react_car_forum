import React, {Component} from 'react'
import Posts from '../components/Posts'
// import PostDetails from '../components/PostDetails'
import CreatePost from '../components/CreatePost'
// import Comments from '../components/Comments'
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom';
import PostsList from '../components/PostsList';

const URL = "http://localhost:3000/posts"

export default class PostContainer extends Component {

    constructor(){
        super();
        this.state= {
            postsArray: [],
            subject: "",
            body: "",
            picture: ""
         }
                    }

    componentDidMount() {
        this.fetchPosts()
    }

    fetchPosts = () => {
         console.log("FETCHING POSTS!!")
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
                  user_id: this.props.currentUser.id
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

    handleDelete = (post) => {
        console.log("Delete")
        fetch(URL + "/" + post.id, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(data => {console.log(data);
        let newArray = this.state.postsArray.filter(p => p.id !== post.id)
        this.setState({
            postsArray: newArray
        })
    })
    }

        render() {
            let {match}= this.props
            console.log("PC" ,this.props)
        return (
            <div>
                <CreatePost handleSubmit={this.handleSubmit} handleChange={this.handleChange} newPost={this.state}/>
                <PostsList posts={this.state.postsArray} handleDelete={this.handleDelete} currentUser={this.props.currentUser}/>
                <Route exact path={match.url} render={() => <h3>Posts List</h3>}/>
                <Route path={`${match.url}/:postId`} render={routerProps => <Posts {...routerProps} posts={this.state.postsArray} /> }/>

            </div>
       )

    }
}


 // <div>
 //     <CreatePost handleSubmit={this.handleSubmit} handleChange={this.handleChange} newPost={this.state}/>
 //     <PostsList posts={this.state.postsArray} delete={this.handleDelete}/>
 //
 //      <Route exact path={match.url} render={() => <h3>Posts List</h3>}/>
 //
 //      <Route path={`${match.url}/:postId`} render={routerProps => <Posts {...routerProps} posts={this.state.postsArray} /> }/>
 // </div>



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
