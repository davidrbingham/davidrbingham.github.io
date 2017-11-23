import React from 'react';
import ProgressBar from '../../components/progress/ProgressBar';

import skills from '../../../json/skills.json';
import frameworks from '../../../json/frameworks.json';
import tools from '../../../json/tools.json';

export default class SkillsContent extends React.Component {

	getSkillsOverview(){
		return skills.map((entry, index) => {
			return <ProgressBar key={index} description={entry.description} percentage={entry.percentage} imageURL={entry.imageURL}/>;
		});
	}

	getFrameworksOverview(){
		return frameworks.map((entry, index) => {
			return <ProgressBar key={index} description={entry.description} percentage={entry.percentage} imageURL={entry.imageURL}/>;
		});
	}

	getToolsOverview(){
		return tools.map((entry, index) => {
			return <ProgressBar key={index} description={entry.description} percentage={entry.percentage} imageURL={entry.imageURL}/>;
		});
	}

	render() {
		return (
			<div className="page-content">
				<div className="skills-container">
					<div>
						<p>
							The following are an overview of my skills and how I rate myself in using that skill.
							Since years experience does not always equate to knowledge depth, I feel that providing
							a proficiency rating is probably a more accurate assessment.
						</p>
						<p><b>Skills</b></p>
					</div>
					{ this.getSkillsOverview() }
					<p><b>Frameworks</b></p>
					{ this.getFrameworksOverview() }
						<p><b>Tools</b></p>
					{ this.getToolsOverview() }
				</div>
			</div>
		);
	}
}
