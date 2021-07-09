import React, { FunctionComponent } from "react"
import {
	AppBar,
	Toolbar,
	Typography,
	Grid,
} from "@material-ui/core"


const Header: FunctionComponent = () =>
{
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography>
					React-TS-Skeleton
				</Typography>
			</Toolbar>
		</AppBar>
   )
}

export default Header
