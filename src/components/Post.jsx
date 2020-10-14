import React, { lazy, Suspense } from "react";
const PostBody = lazy(() => import("./PostBody"));
const CommentSection = lazy(() => import("./CommentSection"));

function Post({ post, addComment }) {
	return (
		<div>
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
		</div>
	);
}

export default Post;
