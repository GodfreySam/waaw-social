import React, { useRef } from "react";
import axios from "axios";
import "./auth.css";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";

const VerifyUser = () => {
	const token = useRef();
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!token.current.value) return toast.error("Token is required");

		const user = {
			token: token.current.value,
		};

		try {
			let res = await axios.post("/api/v1/auth/verify", user);
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
						<h1>User Email Veriffication</h1>
					</div>
					<br />
					<br />
					<form onSubmit={handleSubmit} className="auth register-form">
						<label for="token">Verification Token</label>
						<input
							type="text"
							name="text"
							id=""
							placeholder="email verification token"
							ref={token}
						/>
						<input className="form__submit-button" type="submit" value="Submit" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default VerifyUser;
