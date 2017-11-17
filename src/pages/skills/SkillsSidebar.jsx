import React from 'react';
import SkillsImage from '../../../images/titles/title-certifications.svg';

export default class SkillsSidebar extends React.Component {

	render() {
		return (
			<div className="page-sidebar">
				<div>
					<object type="image/svg+xml" data={SkillsImage}/>
				</div>
			</div>
		);
	}
}
