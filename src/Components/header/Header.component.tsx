import React, { FunctionComponent } from "react"
import {
	AppBar,
	Toolbar,
	Typography,
	Grid,
} from "@mui/material"


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
