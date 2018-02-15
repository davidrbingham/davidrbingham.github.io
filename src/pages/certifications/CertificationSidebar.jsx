import React from 'react';
import CertificationImage from '../../../images/titles/title-certifications.svg';

export default class CertificationSidebar extends React.Component {

	render() {
		return (
			<div className="page-sidebar">
				<div className="image-align-right">
					<object className="image-scaling-medium" type="image/svg+xml" data={CertificationImage}/>
				</div>
			</div>
		);
	}
}
