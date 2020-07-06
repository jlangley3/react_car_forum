// src/PostDetails.js
import React from 'react';
import Comments from '../components/Comments'

const URL = "http://localhost:3000"

class PostDetails extends React.Component {

  state= {
     currentPost: {
       comments:[]
     },
     body: "",
     picture: ""
  }

    componentDidMount() {
      console.log("fetching post details")
        fetch(URL + this.props.location.pathname)
        .then(resp => resp.json())
        .then(data => this.setState({
          currentPost: data
        }))
    }

    handleSubmit = (event) => {
      event.preventDefault();
      let newCom = this.state.currentPost.comments
      console.log("adding comment")
        fetch(URL + "/comments", {
          method: "POST",
          headers: {"Content-Type": "application/json", "Accept": "application/json"},
          body: JSON.stringify({
            body: this.state.body,
            picture: this.state.picture,
            user_id: 2, 
            post_id: this.state.currentPost.id
          })
        })
        .then(resp => resp.json())
        .then(data => this.setState({
             body: "",
            picture: "",
            currentPost: {
              comments: [data,...newCom]
            }
        }))
    }

    handleChange = (event) => {
      console.log("handle Change")
      this.setState({
          [event.target.name]: event.target.value
      })
  }


  render() {
    console.log(this.state)
    let {picture, subject, body} = this.state.currentPost
    return (<div><h1>{subject}</h1>
    <img src={picture}/>
     <form onSubmit={this.handleSubmit}>
         <h1>add comment</h1>
         <div>
           <input onChange={this.handleChange} type="text" name="comment" placeholder="comment" />
           <label htmlFor="comment">comment</label>
         </div>
         <div>
           <input onChange={this.handleChange} type="picture" name="picture" placeholder="picture" />
           <label htmlFor="picture">picture</label>
         </div>
         <input type="submit" value="submit" />
       </form>
    <div>{this.state.currentPost.comments.map(comment => <Comments comment={comment}/>)}</div>
    </div>)
  }
}

export default PostDetails;
