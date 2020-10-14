import React, { useState, useEffect } from "react";
import Post from "./components/Post";
import BlogErrorBoundry from "./components/ErrorBoundries/BlogErrorBoundry";
import faker from "faker";

const mockPost = {
	author: { name: faker.name.firstName() + " " + faker.name.lastName() },
	title: faker.lorem.sentence(),
	date: faker.date.past(),
	body:
		faker.lorem.paragraphs() +
		"\n" +
		faker.lorem.paragraphs() +
		"\n" +
		faker.lorem.paragraphs() +
		"\n" +
		faker.lorem.paragraphs() +
		"\n" +
		faker.lorem.paragraphs(),
	comments: [
		{
			author: faker.name.firstName() + " " + faker.name.lastName(),
			content: faker.lorem.paragraph()
		},
		{
			author: faker.name.firstName() + " " + faker.name.lastName(),
			content: faker.lorem.paragraph()
		},
		{
			author: faker.name.firstName() + " " + faker.name.lastName(),
			content: faker.lorem.paragraph()
		},
		{
			author: faker.name.firstName() + " " + faker.name.lastName(),
			content: faker.lorem.paragraph()
		}
	]
};

function App() {
	const [post, setPost] = useState(mockPost);

	const addComment = comment => {
		const commentsArray = post.comments;
		commentsArray.unshift(comment);
		setPost(post => ({ ...post, comments: commentsArray }));
	};

	return (
		<div className="App">
			<BlogErrorBoundry>
				<Post post={post} addComment={addComment} />
			</BlogErrorBoundry>
		</div>
	);
}

export default App;
