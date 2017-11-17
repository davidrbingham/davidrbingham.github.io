import React from 'react';
import SimpleContentContainer from '../../components/content/SimpleContentContainer';

const TEXT_CONTENT_1 = "Thanks for taking a look at my portfolio site! " +
	"I like to keep busy with small projects that I can squeeze into my limited free time " +
	"to keep my skills current, and this is one of those projects. For this particular site I " +
	"wanted to play around with CSS grids and flex-box to build some knowledge in that area, " +
	"and to further develop React skills and try my hand at graphics design. I also wanted to " +
	"experiment with GitHub pages and to have  this site hosted for free. " +
	"I'll be creating a blog at some point, more as a way of documenting my learnings along the way.";

const TEXT_CONTENT_2 = "You can view my GitHub page for some other projects I have kept myself busy with. " +
	"Some are small Proof of Concepts, some are larger projects in-progress which I mean to come back to. " +
	"So much to learn in the world of web development you can't cover everything.";

const TEXT_CONTENT_3 = "Busying myself with small projects outside of work is at least a start. " +
	"My focus at the minute is to obtain my OCP exam which I am working on, and then to work on obtaining " +
	"my Spring 5 certification.";

const TEXT_CONTENT_4 = "Thanks - David."

export default class HomeContent extends React.Component {

	render() {
		return (
			<div className="page-content">
				<SimpleContentContainer title="An Introduction">
					<p>{ TEXT_CONTENT_1 }</p>
					<p>{ TEXT_CONTENT_2 }</p>
					<p>{ TEXT_CONTENT_3 }</p>
					<p>{ TEXT_CONTENT_4 }</p>
				</SimpleContentContainer>
			</div>
		);
	}
}
