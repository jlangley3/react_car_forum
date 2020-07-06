// ./src/components/PostsList.js
import React from 'react';
import { Link } from 'react-router-dom';
import Posts from '../components/Posts'

const PostsList = ({ posts }) => {
  const renderPosts = posts.map(post => {
      return (<div>
    <Posts key={post.id} post={post}/></div>)
    
});
 
  return (
    <div>
      {renderPosts}
    </div>
  );
};
 
export default PostsList;

