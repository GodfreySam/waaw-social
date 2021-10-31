import React, { useRef } from "react";
import axios from "axios";
import "./auth.css";
import toast from "react-hot-toast";
import { Link, useHistory } from "react-router-dom";

const Register = () => {
	const firstname = useRef();
	const lastname = useRef();
	const username = useRef();
	const email = useRef();
	const password = useRef();
	const gender = useRef();
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!firstname.current.value) return toast.error("First name is required");
		if (!lastname.current.value) return toast.error("Last name is required");
		if (!username.current.value) return toast.error("Username is required");
		if (!email.current.value) return toast.error("Email address is required");
		if (!password.current.value) return toast.error("Password is required");
		if (!gender.current.value) return toast.error("Gender is required");

		const user = {
			firstname: firstname.current.value,
			lastname: lastname.current.value,
			username: username.current.value,
			email: email.current.value,
			password: password.current.value,
			gender: gender.current.value,
		};

		try {
			let res = await axios.post("/api/v1/auth/register", user);
			if (res.data.success) toast.success(res.data.msg);
			history.push("/user/verify");
		} catch (err) {
			if (!err.response.data.success) return toast.error(err.response.data.msg);
		}
	};

	return (
		<div className="register">
			<div className="form-flex">
				<div className="container-form register-form">
					<div className="heading">
						<h1>User Signup</h1>
					</div>

					<form onSubmit={handleSubmit} className="auth register-form root">
						<label for="username">First Name</label>
						<input
							type="text"
							name="firstname"
							id=""
							placeholder="your name"
							ref={firstname}
						/>
						<label for="username">Last Name</label>
						<input
							type="text"
							name="lastname"
							id=""
							placeholder="your family name"
							ref={lastname}
						/>
						<label for="username">Username</label>
						<input
							type="text"
							name="username"
							id=""
							placeholder="what your friends call you"
							ref={username}
						/>
						<label for="email">Email</label>
						<input
							type="email"
							name="email"
							id=""
							placeholder="name@gmail.com"
							ref={email}
						/>
						<label for="password">Password</label>
						<input
							type="password"
							name="password"
							placeholder="6+ characters"
							ref={password}
						/>
						<label id="demo-simple-select-outlined-label">Gender</label>
						<select
							labelId="demo-simple-select-outlined-label"
							id="demo-simple-select-outlined"
							ref={gender}
							label="Gender"
						>
							<option value="">None</option>
							<option value="female">Female</option>
							<option value="male">Male</option>
						</select>
						<input className="form__submit-button" type="submit" value="Signup" />
					</form>
					<div className="register__para_link">
						<p>
							Already have an account?
							<Link className="register__anchor" to="/user/login">
								Signin
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
