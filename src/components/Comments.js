// src/Comments.js
import React from 'react';
import "../styles/Comments.css"


const URL = "http://localhost:3000"


class Comments extends React.Component {
   state = {
       commentBody: this.props.comment.body,
       commentPicture: this.props.comment.picture,
       formToggle: false
   }


   handleSubmit = (event) => {
    event.preventDefault();

    console.log("editing comment")
    fetch(URL + "/comments/"+ this.props.comment.id,{
        method: "PATCH",
        headers: {"Content-Type": "application/json", "Accept": "application/json"},
        body: JSON.stringify({
            body: this.state.commentBody,
            picture: this.state.commentPicture,
        })
    })
    .then(resp => resp.json())
    .then(data =>
        this.setState({
            formToggle: false,
            commentBody: this.state.commentBody,
            commentPicture: this.state.commentPicture
        }))
    .then(this.props.experiment)

}

handleChange = (event) => {
    console.log("handle Change", event.target.value)
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleToggle = () => {
    this.setState({
        formToggle: !this.state.formToggle
    })
}
      render() {

        return <div className="container" >
        <div className="card com">
        <span>{this.props.comment.body}</span>{this.props.comment.picture ?
          <img className="img-fluid" src={this.props.comment.picture} alt="Card graphic"/>
          : null }
      
      <button className="btn float-left login_btn" onClick={this.handleToggle}>EDIT</button>
      {this.state.formToggle ? <form onSubmit={this.handleSubmit} className="card">
      <h1>Edit Comment</h1>
                <div>
                <div className="input-group form-group">
						<div className="input-group-prepend">
						</div>
						<span className="input-group-text"><i className="fa fa-comment"></i></span>
						<input onChange={this.handleChange} name="commentBody" value={this.state.commentBody} type="text-field" className="form-control-com" placeholder="Body of Post"/>
					</div>
					<div className="input-group form-group">
						<div className="input-group-prepend">
						</div>
						<span className="input-group-text"><i className="fa fa-picture-o"></i></span>
						<input onChange={this.handleChange} name="commentPicture" value={this.state.commentPicture} type="text" className="form-control-com" placeholder="Image Address"/>
					</div>
					<div className="form-group">

						<input type="submit" value="Post!" className="btn"/>
					</div>
                    </div>
            </form>
             : null}

      <br />
      <button className="btn float-right" onClick={() => this.props.delete(this.props.comment)}>DELETE</button>
      </div>
      </div>
      }
    }

export default Comments;
