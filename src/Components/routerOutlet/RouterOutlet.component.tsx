import React, { FunctionComponent } from "react"
import { Switch, Route } from "react-router-dom"
import HomePage from "../homePage/HomePage.component"

const RouterOutlet: FunctionComponent = () =>
{
	return (
		<Switch>
			<Route exact path='/' component={HomePage} />
			{/* Put some routes here */}
		</Switch>
	)
}

export default RouterOutlet
