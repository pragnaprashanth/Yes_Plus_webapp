import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name:'',
			email:'',
			password:'',
			branch:'',
			phno:'',
			joinyear:''			
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		alert(`${this.state.name}  Registered Successfully !!!!`)
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:5000/add', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { name,email,password,branch,contact,joinyear } = this.state
		return (
        
			<div className="form">
					<h1 className="heading">Sign Up</h1>
				<form onSubmit={this.submitHandler}>
					<div>
						<label>Name:</label>
						<input
							type="text"
							name="name"
							placeholder="Name"
							value={name}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<label>email:</label>
						<input
							type="email"
							name="email"
							placeholder="Email"
							value={email}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<label>Password:</label>
						<input
							type="password"
							name="password"
							placeholder="Password"
							value={password}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<label>contact:</label>
						<input
							type="tel"
							name="contact"
							placeholder="Phone number"
							value={contact}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
					<label>branch:</label>
						<input
							type="text"
							name="branch"
							placeholder="Branch"
							value={branch}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
						<label>joinyear:</label>
						<input
							type="date"
							name="joinyear"
							placeholder="Join"
							value={joinyear}
							onChange={this.changeHandler}
						/>
					</div>

					<button class="submit-button" type="submit">Submit</button>
				</form>
				<div> to login
				<NavLink to="/login" className="yp_navbar2">login</NavLink>
				</div>
			</div>
			
		)
	}
}


export default PostForm