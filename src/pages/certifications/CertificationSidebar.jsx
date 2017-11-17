import React from 'react';
import CertificationImage from '../../../images/titles/title-certifications.svg';

export default class CertificationSidebar extends React.Component {

	render() {
		return (
			<div className="page-sidebar">
				<div>
					<object type="image/svg+xml" data={CertificationImage}/>
				</div>
			</div>
		);
	}
}
