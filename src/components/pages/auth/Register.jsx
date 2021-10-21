import React from "react";
import "./register.css";
import { makeStyles } from "@material-ui/core";
import { TextField, Button} from "@material-ui/core";

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
      fontWeight: 'bold',
      width: '100%',
      maxWidth: '30%',
      padding: '10px',
      textAlign: 'center',
		"&:hover": {
			backgroundColor: "rgb(13, 136, 136)",
			color: "#fff",
      },
	},
}));

const Register = () => {
	const classes = useStyles();
	return (
		<div className="register">
			<div className="holder">
				<h3>User Signup</h3>
				<form className={classes.root} noValidate autoComplete="off">
					<TextField id="outlined-basic" label="Username" variant="outlined" />
					<TextField id="outlined-basic" label="Email" variant="outlined" />
					<TextField id="outlined-basic" label="Password" variant="outlined" />
					<Button className={classes.btn1} variant="contained">
						Signup
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Register;
