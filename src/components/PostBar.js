// src/PostBar.js
import React from 'react';
import '../styles/Posts.css'
import { NavLink } from 'react-router-dom';


class PostBar extends React.Component {
  render() {
	// let {username, password} = this.props.newUser
    return (     
<div className="container">
	<div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3>Add a post</h3>
			</div>
			<div className="card-body">
				<form onSubmit={this.props.handleSubmit}>
{/* username */}
					<div className="input-group form-group">
						<div className="input-group-prepend">
						</div>
						<input onChange={this.props.handleChange} name="username" value={this.props} type="text" className="form-control" placeholder="username"/>
					</div>
					<div className="form-group">
						{/* <input type="submit" value="PostBar" className="btn float-right PostBar_btn"/> */}
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Submit</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
    );
  }
}
 
export default PostBar;
