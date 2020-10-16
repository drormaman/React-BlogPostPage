import React, { lazy, Suspense } from "react";
import { Container } from "@material-ui/core";

const PostBody = lazy(() => import("./PostBody"));
const CommentSection = lazy(() => import("./CommentSection"));

function Post({ post, addComment }) {
	return (
		<Container>
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
