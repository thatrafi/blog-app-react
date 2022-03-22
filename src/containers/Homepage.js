import React from 'react';
import PostsPreview from '../components/Posts/PostsPreview';
import Card from '../components/UI/Card';

class Homepage extends React.Component {
	render() {
		return (
			<div className="container">
				<Card className="p-5">
					<PostsPreview />
				</Card>
			</div>
		);
	}
}

export default Homepage;
