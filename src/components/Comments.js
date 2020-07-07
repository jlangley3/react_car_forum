// src/Comments.js
import React from 'react';
import "../styles/Comments.css"

const URL = "http://localhost:3000/comments" 


class Comments extends React.Component {
    constructor(){
        super();
        this.state= {
            currentPost: [],
            comments: []
         }
                    }
        handleDelete = (comment) => {
          console.log("Delete", comment)
          fetch(URL + "/" + comment.id, {
              method: "DELETE"
          })
          .then(resp => resp.json())
          .then(data => {console.log(data);
          let newArray = this.state.comments.filter(c => c.id !== comment.id)
          this.setState({
              comments: newArray
          })
      })
      }

      render() {
      console.log(this.props.comment)
        return <div className="container" >
        <div className="card">
          <img className="card-img-top img-fluid" src={this.props.picture ? this.props.picture : null} alt="Card image"/>
      <p>{this.props.body}</p>
      <button onClick={() => this.handleDelete(this.props.comment)}>DELETE</button>
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