// src/PostBar.js
import React from 'react';
import '../styles/CreatePost.css'
// import { NavLink } from 'react-router-dom';


class CreatePost extends React.Component {
  render() {
	let {subject, body, picture} = this.props.newPost
    return (
<div className="container" id="my-form">
	<div className="d-flex justify-content-center h-100">
		<div className="card c">
			<div className="card-header">
				<h3>Add a post</h3>
			</div>
			<div className="card-body">
				<form onSubmit={this.props.handleSubmit}>
{/* Create new Post form */}
					<div className="input-group form-group">
						<div className="input-group-prepend">
						</div>
						<span className="input-group-text"><i class="fa fa-pencil-square" aria-hidden="true"></i></span>
						<input onChange={this.props.handleChange} name="subject" value={subject} type="text" className="form-control" placeholder="subject"/>
					</div>
                    <div className="input-group form-group">
						<div className="input-group-prepend">
						</div>
						<span className="input-group-text"><i className="fa fa-comment"></i></span>
						<input onChange={this.props.handleChange} name="body" value={body} type="text-field" className="form-control" placeholder="Body of Post"/>
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
						</div>
						<span className="input-group-text"><i className="fa fa-picture-o"></i></span>
						<input onChange={this.props.handleChange} name="picture" value={picture} type="text" className="form-control" placeholder="Image Address"/>
					</div>
					<div className="form-group">
                        <div className="form-group">
						<input type="submit" value="Post!" className="btn float-right login_btn"/>
					</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
    );
  }
}

export default CreatePost;
