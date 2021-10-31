import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import "./auth.css";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthContext";
import { loginCall } from "../../../apiCalls";

const Login = () => {
	const userInput = useRef();
	const password = useRef();
	const { isFetching, dispatch } = useContext(AuthContext);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!userInput.current.value)
			return toast.error("Username or Email is required");
		if (!password.current.value) return toast.error("Password is required");

		const user = {
			userInput: userInput.current.value,
			password: password.current.value,
		};

		loginCall(user, dispatch);
	};

	return (
		<div className="register">
			<div className="form-flex">
				<div className="container-form login-form">
					<div className="heading">
						<h1>User Signin</h1>
					</div>
					<form onSubmit={handleSubmit} className="login auth">
						<label for="user-input">Email or Username</label>
						<input
							type="text"
							name="user-input"
							id="user-input"
							placeholder="Email or Username"
							ref={userInput}
						/>
						<label for="password">Password</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Password6+ characters"
							ref={password}
						/>
						<input className="form__submit-button" type="submit" value="Signin" />
					</form>
					<div className="register__para_link">
						<p>
							Forgot password?
							<Link className="register__anchor" to="/user/reset">
								Reset Password
							</Link>
						</p>
						<p>
							Don't have an account?
							<Link className="register__anchor" to="/user/register">
								Signup
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
