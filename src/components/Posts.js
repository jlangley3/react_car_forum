// src/Posts.js
import React from 'react';
import "../styles/Posts.css"
 
class Posts extends React.Component {
  
  render() {
    console.log(this.props.post)
    return <div className="post-div">
      <h3>{this.props.post.body}</h3>
    <img className="preview" src={this.props.post.picture} />

    
    </div>
  }
}
 
export default Posts;