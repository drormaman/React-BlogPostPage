import React from "react";
import { Typography } from "@material-ui/core";

function PostBody({ title, author, date, content }) {
	return (
		<div>
			<header>
				<Typography variant="h3">{title}</Typography>
				<Typography variant="subtitle2">{author.name}</Typography>
				<Typography variant="subtitle2">{date.toString()}</Typography>
			</header>

			<div style={{ whiteSpace: "pre-wrap" }}>
				<Typography variant="body1">{content}</Typography>
			</div>
		</div>
	);
}

export default PostBody;
