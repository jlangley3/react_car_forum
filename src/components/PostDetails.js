// src/PostDetails.js
import React from 'react';
import Comments from '../components/Comments'
import "../styles/Details.css"

const URL = "http://localhost:3000"

class PostDetails extends React.Component {

    state= {
        currentPost:  {
            comments:[]
        },
        body: "",
        picture: ""
    }

    componentDidMount() {
       this.fetchPostData()
    }


      fetchPostData =() => {
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
                user_id: 9,
                post_id: this.state.currentPost.id
            })
        })
        .then(resp => resp.json())
        .then(data => {this.fetchPostData();
          this.setState({
            body: "",
            picture: "",
        })}
          )
    }

    handleChange = (event) => {
        console.log("handle Change", event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleComDelete = (comment) => {
        console.log("Delete", comment)
        fetch(URL + "/comments/" + comment.id, {
            method: "DELETE",
            headers: {"Content-Type": "application/json", Accept: "application/json"}
        })
        .then(resp => resp.json())
        .then(data => {console.log(data);
            let newArray = this.state.currentPost.comments.filter(c => c.id !== comment.id)

            this.setState({
                currentPost: {comments: newArray}
            })
        })
    }


    render() {
        let {picture, subject, body, comments} = this.state.currentPost
        return (<div className="container-banner" ><h1>{subject}</h1>
            <img className="row" src={picture} alt="Car Picture Here"/>
            <form onSubmit={this.handleSubmit} className="card-c">
            <h1>add comment</h1>
            <div>
            <input className="remember" onChange={this.handleChange} type="text" name="body" placeholder="comment" value={this.state.body}/>
            <label htmlFor="comment">comment</label>
            <input className="remember" onChange={this.handleChange} type="picture" name="picture" placeholder="picture" value={this.state.picture}/>
            <label htmlFor="picture">picture</label>
            </div>
            <input type="submit" value="submit" />
            </form>
            <div>{this.state.currentPost.comments.map(comment => <Comments key={comment.id} comment={comment} delete={this.handleComDelete}/>)}</div>
            </div>)
        }
    }

    export default PostDetails;
