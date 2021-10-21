import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "./components/pages/auth/Login";
import Register from "./components/pages/auth/Register";
import Timeline from "./components/pages/timeline/Timeline";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Timeline}></Route>
				<Route path="/login" exact component={Login}></Route>
				<Route path="/register" exact component={Register}></Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
