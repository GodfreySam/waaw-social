import React, { useRef } from "react";
import axios from "axios";
import "./auth.css";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";

const ChangePassword
   = () => {
	const token = useRef();
	const password = useRef();
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!token.current.value) return toast.error("Token is required");
		if (!password.current.value) return toast.error("Password is required");

		const user = {
			token: token.current.value,
			password: password.current.value,
		};

		try {
			let res = await axios.post("/api/v1/auth/reset-password", user);
			if (res.data.success) toast.success(res.data.msg);
			history.push("/user/login");
		} catch (err) {
			if (!err.response.data.success) return toast.error(err.response.data.msg);
		}
	};

	return (
		<div className="register">
			<div className="form-flex">
				<div className="container-form register-form">
					<div className="heading">
						<h1>User Password Reset</h1>
					</div>
					<br />
					<form onSubmit={handleSubmit} className="auth register-form">
						<label for="password">New Password</label>
						<input
							type="password"
							name="password"
							id=""
							placeholder="..."
							ref={password}
						/>
						<label for="token">Token</label>
						<input type="text" name="token" id="" placeholder="..." ref={token} />
						<input className="form__submit-button" type="submit" value="Submit" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default ChangePassword;
