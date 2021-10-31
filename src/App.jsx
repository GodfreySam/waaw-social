import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/pages/auth/Login";
import VerifyUser from "./components/pages/auth/VerifyUser";
import Register from "./components/pages/auth/Register";
import Timeline from "./components/pages/timeline/Timeline";
import Profile from "./components/profile/Profile";
import { Toaster } from "react-hot-toast";
import ResetPassword from "./components/pages/auth/ResetPassword";
import EffectResetPassword from "./components/pages/auth/EffectResetPassword";

const App = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact component={Timeline}></Route>
					<Route path="/user/login" exact component={Login}></Route>
					<Route path="/user/verify" exact component={VerifyUser}></Route>
					<Route path="/user/register" exact component={Register}></Route>
					<Route path="/user/profile" exact component={Profile}></Route>
					<Route path="/user/reset" exact component={ResetPassword}></Route>
					<Route path="/user/reset-password" exact component={EffectResetPassword}></Route>
				</Switch>
			</Router>
			<Toaster
				position="top-right"
				toastOptions={{
					className: "",
					duration: 10000,
					style: {
						color: "#fff",
					},
					success: {
						style: {
							background: "green",
						},
					},
					error: {
						style: {
							background: "red",
						},
					},
				}}
			/>
		</>
	);
};

export default App;
