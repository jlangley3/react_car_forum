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

      <div className="card-deck">
          <div className="card-b">
              <div className="card-block">
                  <h4 className="card-title">{subject}</h4>
                  <img className="card-img-top" src={picture} alt=''/> <p class="card-text">{body}</p>
                  {this.props.currentUser.id == this.props.post.user_id ? <button onClick={() => this.props.handleDelete(this.props.post)}>DELETE</button> : null}
                  {/*<button onClick={this.props.delete}>DELETE</button> */}
                  <Link key={id} post={subject}  to={`/posts/${id}`}> <button>Comments</button></Link>

              </div>
          </div>
      </div>)


  }
}

export default Posts;
