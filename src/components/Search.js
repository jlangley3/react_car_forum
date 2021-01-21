import React from 'react'
import '../styles/Login.css'


const Search = props => {
    return (

        <div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-header">
                        <h3>Vin Search</h3>
                    </div>
                    <div className="card-body">
                        <form >
                        {/* search */}
                            <div className="input-group form-group">
                            <div className="input-group-prepend">
                            </div>
                                <input  name="search" value="" type="text" className="form-control" placeholder="Search Vin"/>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Search" className="btn float-right login_btn"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search



