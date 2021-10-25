import React, { useRef } from "react";
import axios from "axios";
import "./register.css";
import { makeStyles } from "@material-ui/core";
import { TextField, Button } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import toast from "react-hot-toast";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "85%",
		},
	},

	btn1: {
		backgroundColor: "rgb(13, 136, 136)",
		color: "#fff",
		fontWeight: "bold",
		width: "100%",
		maxWidth: "30%",
		padding: "10px",
		textAlign: "center",
		"&:hover": {
			backgroundColor: "rgb(13, 136, 136)",
			color: "#fff",
		},
	},
}));

const Register = () => {
	const username = useRef();
	const email = useRef();
	const password = useRef();
	const gender = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!username) return toast.error("Username is required");
		if (!email) return toast.error("Email is required");
		if (!password) return toast.error("Password is required");
		if (!gender) return toast.error("Gender is required");

		const user = {
			username: username.current.value,
			email: email.current.value,
			password: username.current.value,
			gender: username.current.value,
		};

		try {
			let res = await axios.post(
				"http://127.0.0.1:5000/api/v1/auth/register",
				user,
			);
			if (res.data.success) toast.success(res.data.msg);
			console.log(res.data);
		} catch (err) {
			if (!err.response.data.success) return toast.error(err.response.data.msg);
		}
	};

	const classes = useStyles();

	return (
		<div className="register">
			<div className="holder">
				<h3>User Signup</h3>
				<form
					onSubmit={handleSubmit}
					className={classes.root}
					noValidate
					autoComplete="off"
				>
					<TextField
						type="text"
						id="outlined-basic"
						label="Username"
						variant="outlined"
						inputRef={username}
					/>
					<TextField
						type="email"
						id="outlined-basic"
						label="Email"
						variant="outlined"
						inputRef={email}
					/>
					<TextField
						type="password"
						id="outlined-basic"
						label="Password"
						variant="outlined"
						inputRef={password}
					/>
					<FormControl variant="outlined" className={classes.formControl}>
						<InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label"
							id="demo-simple-select-outlined"
							inputRef={gender}
							label="Gender"
							inputProps={{
								name: "age",
								id: "outlined-age-native-simple",
							}}
						>
							{/* <MenuItem>
								<em>None</em>
							</MenuItem> */}
							<MenuItem value="female">Female</MenuItem>
							<MenuItem value="male">Male</MenuItem>
						</Select>
					</FormControl>
					<Button type="submit" className={classes.btn1} variant="contained">
						Signup
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Register;
