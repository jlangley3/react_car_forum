// src/Posts.js
import React from 'react';
import { Link } from 'react-router-dom';
// import PostDetails from '../components/PostDetails'
// import PostBar from '../components/PostBar'
// import Comments from './Comments'
import "../styles/Posts.css"


class Posts extends React.Component {

  render() {
      // console.log(this.props.currentUser.id)
    let {subject, body, picture, user, id} = this.props.post
    return (
      <div className="card">
        <img className="card-img-top" src={picture} alt="Card image cap"/>
         <div className="card-body">
          <h5 className="card-title">{subject}</h5>
          <p className="card-text">{body}</p>
          
          <Link key={id} post={subject}  to={`/posts/${id}`}> <button className="btn btn-primary">Comments</button></Link>
          {this.props.currentUser.id == this.props.post.user_id ? <button className="btn btn-primary" onClick={() => this.props.handleDelete(this.props.post)}>DELETE</button> : null}
          
        </div>
      </div>


      
      
      )
  }
}

export default Posts;
