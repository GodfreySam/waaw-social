import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/pages/auth/Login";
import Register from "./components/pages/auth/Register";
import Timeline from "./components/pages/timeline/Timeline";
import { Toaster } from "react-hot-toast";

const App = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact component={Timeline}></Route>
					<Route path="/login" exact component={Login}></Route>
					<Route path="/register" exact component={Register}></Route>
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
