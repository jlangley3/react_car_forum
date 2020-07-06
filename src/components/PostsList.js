// ./src/components/PostsList.js
import React from 'react';
import { Link } from 'react-router-dom';
import Posts from '../components/Posts'

const PostsList = (props) => {
    let {posts} = props
  const renderPosts = posts.map(post => {
      return (
    <Posts delete={() => props.delete(post)} key={post.id} post={post}/>)
    
});
 
  return (
    <div>
      {renderPosts}
    </div>
  );
};
 
export default PostsList;

