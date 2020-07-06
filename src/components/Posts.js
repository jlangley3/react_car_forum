// src/Posts.js
import React from 'react';
import { Link } from 'react-router-dom';
import PostDetails from '../components/PostDetails'
import PostBar from '../components/PostBar'
import Comments from './Comments'
import "../styles/Posts.css"

class Posts extends React.Component {

  render() {
    let {subject, body, picture, user, id} = this.props.post
    return (
      <div className="card-deck">
    <div className="card">
    
    <div class="card-block">
      <h4 onClick={this.props.delete} className="card-title">{subject}</h4>
      <p class="card-text">{body}</p>
      <Link key={id} post={this.props.post}  to={`/posts/${id}`}><img className="card-img-top" src={picture} /></Link>
      <p class="card-text"><small className="text-muted">...Click picture to see details</small></p>

    </div>
    </div>
    {/* <PostDetails />
    <Comments /> */}
    </div>)


  }
}

export default Posts;
