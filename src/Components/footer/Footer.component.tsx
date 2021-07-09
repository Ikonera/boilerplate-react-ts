import React, { FunctionComponent } from "react"
import {
	AppBar,
	Toolbar,
	Typography,
	Grid,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"


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
