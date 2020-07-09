// src/PostDetails.js
import React from 'react';
import Comments from '../components/Comments'
import "../styles/Details.css"

const URL = "http://localhost:3000"

export default class PostDetails extends React.Component {
    constructor() {
        super()
        this.state= {
            currentPost:  {
                comments:[]
            },
            body: "",
            picture: ""
        }
    }


    componentDidMount() {
        this.fetchPostData()
    }


    fetchPostData =() => {
        // kind of the opposite of the point of React.
        // we use this a lot.
        console.log("fetching post details")
        fetch(URL + this.props.location.pathname)
        .then(resp => resp.json())
        .then(data => this.setState({
            currentPost: data
        }))
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // let newCom = this.state.currentPost.comments
        console.log("adding comment")
        fetch(URL + "/comments", {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify({
                body: this.state.body,
                picture: this.state.picture,
                user_id: this.props.currentUser.id,
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
        .then(this.fetchPostData)
    }


    render() {
        let {picture, subject, body, comments} = this.state.currentPost
        console.log("PICTURE", picture)
        return (<div><div className="card" ><h1><i class="fa fa-user" aria-hidden="true"></i>Subject: &nbsp;&nbsp;  {subject}</h1>
            <img className="row" src={picture} alt="Car Here"/>
            </div>

            <form onSubmit={this.handleSubmit} className="card">
                <h1>Add a Comment</h1>
                <div>
                <div className="input-group form-group">
						<div className="input-group-prepend">
						</div>
						<span className="input-group-text"><i className="fa fa-comment"></i></span>
						<input onChange={this.handleChange} name="body" value={this.state.body} type="text-field" className="form-control-com" placeholder="Body of Post"/>
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
						</div>
						<span className="input-group-text"><i className="fa fa-picture-o"></i></span>
						<input onChange={this.handleChange} name="picture" value={this.state.picture} type="text" className="form-control-com" placeholder="Image Address"/>
					</div>
					<div className="form-group">

						<input type="submit" value="Post!" className="btn float-left login_btn"/>
					</div>
                    </div>
            </form>
            
                <div>{this.state.currentPost.comments.map(comment => <Comments key={comment.id} comment={comment} delete={this.handleComDelete} experiment={this.fetchPostData}/>)}</div>
            </div>)
        }
    }
