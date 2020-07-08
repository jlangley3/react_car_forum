// ./src/components/PostsList.js
import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
import Posts from '../components/Posts'

export default class PostsList extends Component  {

    renderPosts = () =>
        this.props.posts.map(
                post =>
                    (<Posts key={post.id} currentUser= {this.props.currentUser} handleDelete={this.props.handleDelete} post={post}/>))

    render() {
        // console.log("PL", this.props)
        return (
            <div>
                {this.renderPosts()}
            </div>
        )
    }
}
