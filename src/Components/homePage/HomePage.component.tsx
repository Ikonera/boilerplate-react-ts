import React, { FunctionComponent } from "react"
import { Link, Grid, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { GitHub } from "@mui/icons-material"
//import "./page.scss"


const styles = makeStyles({
	root: {
		minHeight: '100%',
	},
	container: {
		margin: '25vh auto',
		padding: '2% 0',
		width: '50%',
		borderRadius: '15px',
		boxShadow: '0 0 5px 2px grey',
	},
	link: {
		fontSize: '18px',
		marginLeft: '5px',
	}
})

const HomePage: FunctionComponent = () =>
{
	const classes = styles()

	const gitLinkProps = {
		target: "_blank",
		href: "https://www.github.com/Ikonera/react-ts-skeleton"
	}

	return (
		<section className={ classes.root }>
			<Grid container justifyContent="center" alignItems="center" className={ classes.container }>
				<Grid item alignItems="center">
					<GitHub fontSize="medium" />
				</Grid>
				<Grid item alignItems="center">
					<Link {...gitLinkProps}>
						<Typography className={ classes.link }>
							github.com/Ikonera/boilerplate-react-ts
						</Typography>
					</Link>
				</Grid>
			</Grid>
		</section>
	)
}

export default HomePage
