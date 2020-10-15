import React, { lazy, Suspense } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const PostBody = lazy(() => import("./PostBody"));
const CommentSection = lazy(() => import("./CommentSection"));

const useStyles = makeStyles(theme => ({
	post_container: { maxWidth: "42em" }
}));

function Post({ post, addComment }) {
	const classes = useStyles();

	return (
		<Container className={classes.post_container}>
			<Suspense fallback={<h1>loading post...</h1>}>
				<PostBody
					title={post.title}
					date={post.date}
					author={post.author}
					content={post.body}
				/>
			</Suspense>
			<Suspense fallback={<h4>loading comments...</h4>}>
				<CommentSection comments={post.comments} addComment={addComment} />
			</Suspense>
		</Container>
	);
}

export default Post;
