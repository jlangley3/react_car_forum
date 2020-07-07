// src/Posts.js
import React from 'react';
import { Link } from 'react-router-dom';
// import PostDetails from '../components/PostDetails'
// import PostBar from '../components/PostBar'
// import Comments from './Comments'
import "../styles/Posts.css"

class Posts extends React.Component {

  render() {
    let {subject, body, picture, user, id} = this.props.post
    return (
      <div className="card-deck">
    <div className="card-b">
    
    <div class="card-block">
      <h4 className="card-title">{subject}</h4>
      <img className="card-img-top" src={picture} /><p class="card-text">{body}</p>
      <button onClick={this.props.delete}>DELETE</button>
      <Link key={id} post={subject}  to={`/posts/${id}`}><button>Comments</button></Link>
      
      
      
      <p class="card-text"><small className="text-muted">...Click picture to see details</small></p>

    </div>
    </div>
    </div>)
   

  }
}

export default Posts;
