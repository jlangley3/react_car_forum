// src/register.js
import React from 'react';
import '../styles/Login.css'
import { NavLink } from 'react-router-dom';


class Register extends React.Component {
  render() {
      let {username, firstName, lastName, email, zip, password} = this.props.newUser
    return (
<div className="container">
	<div className="d-flex justify-content-center h-100">
		<div className="card">
			<div className="card-header">
				<h3>Register</h3>
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
{/* Email */}
                    <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
						<input onChange={this.props.handleChange} name="email" value={email} type="email" className="form-control" placeholder="email"/>
					</div>
{/* First Name */}
                    <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
						<input onChange={this.props.handleChange} name="firstName" value={firstName} type="text" className="form-control" placeholder="First Name"/>
					</div>
{/* Last Name */}
                    <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
						<input onChange={this.props.handleChange} name="lastName" value={lastName} type="text" className="form-control" placeholder="Last Name"/>
					</div>
{/* Zip Code*/}
                    <div className="input-group form-group">
						<div className="input-group-prepend">
							<span className="input-group-text"><i className="fas fa-user"></i></span>
						</div>
						<input onChange={this.props.handleChange} name="zip" value={zip} type="number" className="form-control" placeholder="Zip Code"/>
					</div>

					<div className="row align-items-center remember">
						<input type="checkbox"/>Remember Me
					</div>
					<div className="form-group">
						<input type="submit" value="Login" className="btn float-right login_btn"/>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
    );
  }
}
 
export default Register;