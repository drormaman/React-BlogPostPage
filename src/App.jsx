import React, { useState, useEffect } from "react";
import Post from "./components/Post";
import BlogErrorBoundry from "./components/ErrorBoundries/BlogErrorBoundry";
import faker from "faker";

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

const mockPost = {
	author: { name: faker.name.firstName() + " " + faker.name.lastName() },
	title: faker.lorem.sentence(),
	date: faker.date.past(),
	body: `I'm baby farm-to-table iceland air plant fashion axe shoreditch. Edison bulb messenger bag vaporware, activated charcoal jianbing truffaut bicycle rights ramps plaid. Hoodie DIY distillery, YOLO crucifix twee ennui tumblr stumptown seitan pabst hexagon kogi mlkshk. Chambray vice neutra art party, DIY jean shorts artisan taiyaki.

You probably haven't heard of them portland listicle art party. Cloud bread semiotics selvage health goth direct trade slow-carb, cliche 3 wolf moon distillery cold-pressed meggings street art pork belly. Farm-to-table vice food truck literally. Crucifix kombucha tousled pork belly hella selvage thundercats. Skateboard jianbing pug succulents, shabby chic cred raclette helvetica cardigan deep v fingerstache cray photo booth coloring book. Authentic hashtag cred twee narwhal, freegan etsy next level stumptown adaptogen four dollar toast raw denim taxidermy hot chicken squid.
	
Tbh green juice you probably haven't heard of them put a bird on it quinoa selvage, hoodie palo santo paleo brooklyn. Chicharrones readymade flannel, heirloom bitters art party waistcoat hoodie yr. Food truck kale chips keffiyeh gochujang actually, skateboard DIY pok pok subway tile williamsburg lyft. Coloring book freegan distillery, williamsburg typewriter you probably haven't heard of them wayfarers church-key meditation intelligentsia stumptown marfa raw denim.
	
Locavore fashion axe fingerstache +1 paleo. Authentic tumeric shoreditch iceland subway tile lo-fi. Beard before they sold out mumblecore hammock you probably haven't heard of them, bicycle rights cray church-key palo santo master cleanse quinoa kale chips. Mustache VHS polaroid before they sold out, disrupt ugh mumblecore vaporware vegan cred austin hexagon pop-up man braid. Butcher adaptogen tumblr tousled man braid kombucha typewriter pop-up poutine readymade lo-fi viral tattooed hammock.`,

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
