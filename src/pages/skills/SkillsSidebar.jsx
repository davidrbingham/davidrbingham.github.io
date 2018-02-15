import React from 'react';
import SkillsImage from '../../../images/titles/title-skills.svg';

export default class SkillsSidebar extends React.Component {

	render() {
		return (
			<div className="page-sidebar">
				<div className="image-align-right">
					<object className="image-scaling-larger" type="image/svg+xml" data={SkillsImage}/>
				</div>
			</div>
		);
	}
}
