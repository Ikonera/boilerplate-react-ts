import React, { FunctionComponent } from "react"
import {
	AppBar,
	Toolbar,
	Typography,
	Grid,
} from "@mui/material/"
import { makeStyles } from "@mui/styles"


const styles = makeStyles({
	root: {
		bottom: '0',
		width: '100%',
		height: "3vh",
		position: "absolute",
	},
})

const Footer: FunctionComponent = () =>
{
	const classes = styles()

	return (
		<AppBar position="static" className={ classes.root }>
			<Typography>
				&copy; XXXX - XXXX YourSiteName
			</Typography>
		</AppBar>
   )
}

export default Footer
