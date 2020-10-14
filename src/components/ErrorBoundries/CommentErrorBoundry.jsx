import React, { Component } from "react";

export class CommentErrorBoundry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		};
	}
	static getDerivedStateFromError(error) {
		return {
			hasError: true
		};
	}

	render() {
		if (this.state.hasError) {
			return <h3>something went wrong with this comment</h3>;
		}
		return this.props.children;
	}
}

export default CommentErrorBoundry;
