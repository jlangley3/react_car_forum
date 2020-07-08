// src/Comments.js
import React from 'react';
import "../styles/Comments.css"


const URL = "http://localhost:3000/comments" 


class Comments extends React.Component {
   
      render() {
    
        return <div className="container" >
        <div className="card">
          <img className="card-img-top img-fluid" src={this.props.comment.picture} alt="Card image"/>
      <p>{this.props.comment.body}</p>
      <button onClick={() => this.props.delete(this.props.comment)}>DELETE</button>
      </div>
      </div>
      }
    }
 
export default Comments;


    //     componentDidMount() {
    //         this.testFetch()
    //     }

    //     testFetch = () => {
    //      console.log("You made it!")
    //      fetch(URL)
    //      .then(resp => resp.json())
    //      .then(comData => {
    //          this.setState({
    //             currentPost: [],
    //             comments: []
    //          })
    //      })
    //  }
    //       handleChange = (event) => {
    //           console.log("handle Change")
    //           this.setState({
    //               [event.target.name]: event.target.value
    //           })
    //       }
    //       handleSubmit = (event) => {
    //           console.log("handle submit")
    //           event.preventDefault()
    //           this.addFetch()
    //       }

    //       addFetch = (newCom) => {
    //         console.log("You made it!")
    //         let {currentPost, comments} = this.state
    //         fetch(URL, {
    //             method: "POST",
    //             headers: {"Content-Type": "application/json", "Accept": "application/json"},
    //             body: JSON.stringify({
    //                   comments: [newCom,...comments],
    //                   post_id: currentPost.id
    //                }
    //             )
    //         })
    //         .then(resp => resp.json())
    //         .then(console.log)
    //     }