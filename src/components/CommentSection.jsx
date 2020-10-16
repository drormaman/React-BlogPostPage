import React, { useState, useEffect, useRef } from "react";
import Comment from "./Comment";
import { TextField, Button, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CommentErrorBoundry from "./ErrorBoundries/CommentErrorBoundry";

const useStyles = makeStyles(theme => ({
	form_button: { marginTop: 16, alignSelf: "flex-end" },
	comment_paper_div: { padding: 40, margin: "36px 0 24px" }
}));

function CommentSection({ comments, addComment }) {
	const nameInputRef = useRef();
	const commentInputRef = useRef();
	const classes = useStyles();

	const submitComment = () => {
		console.log(nameInputRef.current.value);
		console.log(commentInputRef.current.value);
		addComment({
			author: nameInputRef.current.value,
			content: commentInputRef.current.value
		});
		nameInputRef.current.value = "";
		commentInputRef.current.value = "";
	};

	return (
		<div>
			<Paper className={classes.comment_paper_div} elevation={1}>
				<Grid container>
					<Grid
						container
						direction="column"
						alignContent="flex-start"
						item
						xs={12}
						md={6}
						className={classes.comment_paper_header}>
						<Typography variant="h5">Enjoyed this article?</Typography>
						<Typography variant="subtitle1">
							Please leave us a comment
						</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<Paper
							elevation={0}
							style={{
								display: "flex",
								flexDirection: "column"
							}}>
							<TextField
								label="name"
								placeholder="Full Name"
								inputRef={nameInputRef}
								onKeyUp={e =>
									e.key === "Enter" && commentInputRef.current.focus()
								}
							/>
							<TextField
								label="Message"
								placeholder="Enter your comment here"
								inputRef={commentInputRef}
								rows={5}
								multiline
								onKeyUp={e => e.key === "Enter" && submitComment()}
							/>
							<Button
								className={classes.form_button}
								variant="contained"
								color="primary"
								onClick={submitComment}>
								Submit
							</Button>
						</Paper>
					</Grid>
				</Grid>
			</Paper>
			{comments.map((comment, i) => (
				<CommentErrorBoundry key={i}>
					<Comment comment={comment} />
				</CommentErrorBoundry>
			))}
		</div>
	);
}

export default CommentSection;
