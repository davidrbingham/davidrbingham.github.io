import React from 'react';
import ExperienceImage from '../../../images/titles/title-experience.svg';

export default class EducationSidebar extends React.Component {

	render() {
		return (
			<div className="page-sidebar image-wrapper">
				<div>
					<object width="100%" height="100%" type="image/svg+xml" data={ExperienceImage}/>
				</div>
			</div>
		);
	}
}
