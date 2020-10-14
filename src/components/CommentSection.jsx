import React, { useState, useEffect, useRef } from "react";
import Comment from "./Comment";
import { TextField, Button } from "@material-ui/core";
import CommentErrorBoundry from "./ErrorBoundries/CommentErrorBoundry";

function CommentSection({ comments, addComment }) {
	const nameInputRef = useRef();
	const commentInputRef = useRef();

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
			<form>
				<TextField
					label="name"
					placeholder="Full Name"
					inputRef={nameInputRef}
					onKeyUp={e => e.key === "Enter" && commentInputRef.current.focus()}
				/>
				<TextField
					label="Message"
					placeholder="Enter your comment here"
					inputRef={commentInputRef}
					rows={4}
					multiline
					onKeyUp={e => e.key === "Enter" && submitComment()}
				/>
				<Button variant="contained" color="primary" onClick={submitComment}>
					Submit
				</Button>
			</form>
			{comments.map((comment, i) => (
				<CommentErrorBoundry key={i}>
					<Comment comment={comment} />
				</CommentErrorBoundry>
			))}
		</div>
	);
}

export default CommentSection;
