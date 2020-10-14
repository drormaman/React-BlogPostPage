import React from "react";
import { Typography } from "@material-ui/core";

function Comment({ comment }) {
	// if (comment.author.indexOf("as") !== -1) {
	// 	throw new Error("Contains a");
	// }
	return (
		<div>
			<Typography variant="h6">{comment.author}</Typography>
			<Typography variant="body2">{comment.content}</Typography>
		</div>
	);
}

export default Comment;
