import React from 'react';
import ExperienceImage from '../../../images/titles/title-experience.svg';

export default class EducationSidebar extends React.Component {

	render() {
		return (
			<div className="page-sidebar">
				<div className="image-align-right">
					<object type="image/svg+xml" data={ExperienceImage}/>
				</div>
			</div>
		);
	}
}
