import React, {Component} from 'react'
import Search from '../components/Search'



// const URL = "http://localhost:3000/api/v1/profile"

export default class SearchContainer extends Component {

    constructor(){
        super();
        this.state= {
            details: [  ]

        }
    }

    render() {
        return (
            <div>
            <Search/>

            </div>
        )
    }
}




