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
                       

        componentDidMount() {
            this.testFetch()
        }

        testFetch = () => {
         console.log("You made it!")
         fetch(URL)
         .then(resp => resp.json())
         .then(comData => {
             this.setState({
                currentPost: [],
                comments: []
             })
         })
     }
          handleChange = (event) => {
              console.log("handle Change")
              this.setState({
                  [event.target.name]: event.target.value
              })
          }
          handleSubmit = (event) => {
              console.log("handle submit")
              event.preventDefault()
              this.addFetch()
          }

          addFetch = (newCom) => {
            console.log("You made it!")
            let {currentPost, comments} = this.state
            fetch(URL, {
                method: "POST",
                headers: {"Content-Type": "application/json", "Accept": "application/json"},
                body: JSON.stringify({
                      comments: [newCom,...comments],
                      post_id: currentPost.id
                   }
                )
            })
            .then(resp => resp.json())
            .then(console.log)
        }

  render() {
   
    return <div class="card-columns">
    <div class="card">
      <img class="card-img-top img-fluid" src="https://lcus1storage.azureedge.net/web/v3/images/global/US_BC_Static.png?v=0x8D6E559E6A5C322" alt="Card image cap"/>
      <div class="card-block">
        <h4 class="card-title">Card title that wraps to a new line</h4>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
    <div class="card p-3">
      <blockquote class="card-block card-blockquote">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer>
          <small class="text-muted">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </small>
        </footer>
      </blockquote>
    </div>
    <div class="card">
      <img class="card-img-top img-fluid" src="..." alt="Card image cap"/>
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div class="card card-inverse card-primary p-3 text-center">
      <blockquote class="card-blockquote">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
        <footer>
          <small>
            Someone famous in <cite title="Source Title">Source Title</cite>
          </small>
        </footer>
      </blockquote>
    </div>
    <div class="card text-center">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div class="card">
      <img class="card-img img-fluid" src="..." alt="Card image"/>
    </div>
    <div class="card p-3 text-right">
      <blockquote class="card-blockquote">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer>
          <small class="text-muted">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </small>
        </footer>
      </blockquote>
    </div>
    <div class="card">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
  }
}
 
export default Comments;