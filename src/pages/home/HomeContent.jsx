import React from 'react';
import SimpleContentContainer from '../../components/content/SimpleContentContainer';

const TEXT_CONTENT = "Thanks for taking a look at my portfolio site. You might wonder " +
	"why I spent time making this site rather than just using something like LinkedIn, and " +
	"that would be a good question! I like to work on small projects that I can squeeze in " +
	"amongst busy family life and this was one of those small projects. You can view my GitHub " +
	"page for some other projects I have kept myself busy with. Some are small Proof of Concepts, " +
	"some are larger projects in progress of that I mean to come back to. So much to learn in the world " +
	"of web development you can't cover everything. Keeping busy with small manageable projects is at " +
	"least a start."

export default class HomeContent extends React.Component {

	render() {
		return (
			<div className="page-content">
				<SimpleContentContainer content={TEXT_CONTENT}/>
			</div>
		);
	}
}
