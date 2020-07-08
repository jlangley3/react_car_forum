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
        <div className="card">
        {this.props.comment.picture ?
          <img className="card-img-top img-fluid" src={this.props.comment.picture} alt="Card graphic"/>
          : null }
      <p>{this.props.comment.body}</p>
      <button onClick={this.handleToggle}>EDIT</button>
      {this.state.formToggle ? <form onSubmit={this.handleSubmit} className="card-c">
            <h1>add comment</h1>
            <div>
            <input className="remember" onChange={this.handleChange} type="text" name="commentBody" placeholder="comment" value={this.state.commentBody}/>
            <label htmlFor="comment">comment</label>
            <input className="remember" onChange={this.handleChange} type="picture" name="commentPicture" placeholder="picture" value={this.state.commentPicture}/>
            <label htmlFor="picture">picture</label>
            </div>
            <input type="submit" value="submit" />
            </form> : null}

      <br />
      <button onClick={() => this.props.delete(this.props.comment)}>DELETE</button>
      </div>
      </div>
      }
    }

export default Comments;
