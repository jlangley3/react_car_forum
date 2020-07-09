// src/Login.js
import React from 'react';
import '../styles/Login.css'
import { NavLink } from 'react-router-dom';


class Login extends React.Component {
    render() {
	    let {username, password} = this.props.newUser
        return (
            <div className="container">
            	<div className="d-flex justify-content-center h-100">
            		<div className="card b">
            			<div className="card-header">
            				<h3>Sign In</h3>
            			</div>
            			<div className="card-body">
            				<form onSubmit={this.props.submit}>
            {/* username */}
            					<div className="input-group form-group">
            						<div className="input-group-prepend">
            							<span className="input-group-text"><i className="fas fa-user"></i></span>
            						</div>
            						<input onChange={this.props.handleChange} name="username" value={username} type="text" className="form-control" placeholder="username"/>

            					</div>
            {/* Password */}
            					<div className="input-group form-group">
            						<div className="input-group-prepend">
            							<span className="input-group-text"><i className="fas fa-key"></i></span>
            						</div>
            						<input onChange={this.props.handleChange} name="password" value={password} type="password" className="form-control" placeholder="password"/>
            					</div>
            					{/*<div className="row align-items-center remember">
            						<input type="checkbox"/>Remember Me
            					</div> */}
            					<div className="form-group">
            						<input type="submit" value="Login" className="btn float-right login_btn"/>
            					</div>
            				</form>
            			</div>
            			<div className="card-footer">
            				<div className="d-flex justify-content-center links">
            					Don't have an account? &nbsp;<NavLink
            										to="/register"
													exact
													className="reg"
            										>Register</NavLink>
            				</div>
            			</div>
            		</div>
            	</div>
            </div>
            );
        }
}

export default Login;





  // <form>
      //   <h1>Login</h1>
      //   <div>
      //     <input type="text" name="username" placeholder="Username" />
      //     <label htmlFor="username">Username</label>
      //   </div>
      //   <div>
      //     <input type="password" name="password" placeholder="Password" />
      //     <label htmlFor="password">Password</label>
      //   </div>
      //   <input type="submit" value="Login" />
      // </form>
