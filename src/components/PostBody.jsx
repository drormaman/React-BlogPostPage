import React from "react";
import { Typography, Paper, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	post_body: { padding: 16 }
}));

function PostBody({ title, author, date, content }) {
	const classes = useStyles();
	return (
		<Paper elevation={0} className={classes.post_body}>
			<header>
				<Typography variant="h4">{title}</Typography>
				<Typography variant="subtitle2">{"By " + author.name}</Typography>
				<Typography variant="subtitle2">
					{date.toDateString().slice(4)}
				</Typography>
			</header>
			<Divider light style={{ marginBottom: 16 }} />
			<div style={{ whiteSpace: "pre-wrap" }}>
				<Typography variant="body1" align="justify">
					{content}
				</Typography>
			</div>
		</Paper>
	);
}

export default PostBody;
