import React from 'react';
import WelcomeImage from '../../../images/titles/title-education.svg';

export default class EducationSidebar extends React.Component {

	render() {
		return (
			<div className="page-sidebar image-wrapper">
				<div>
					<object width="100%" height="100%" type="image/svg+xml" data={WelcomeImage}/>
				</div>
			</div>
		);
	}
}
