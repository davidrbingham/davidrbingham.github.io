import React from 'react';
import CertificationImage from '../../../images/titles/title-certifications.svg';

export default class CertificationSidebar extends React.Component {

	render() {
		return (
			<div className="page-sidebar image-wrapper">
				<div>
					<object width="100%" height="100%" type="image/svg+xml" data={CertificationImage}/>
				</div>
			</div>
		);
	}
}
