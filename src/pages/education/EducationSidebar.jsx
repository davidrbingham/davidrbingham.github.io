import React from 'react';
import EducationImage from '../../../images/titles/title-education.svg';

export default class EducationSidebar extends React.Component {

	render() {
		return (
			<div className="page-sidebar">
				<div>
					<object type="image/svg+xml" data={EducationImage}/>
				</div>
			</div>
		);
	}
}
