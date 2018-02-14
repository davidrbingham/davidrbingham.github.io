import React from 'react';
import OCABadge from '../../../images/badges/badges-oca.png';

export default class CertificationContent extends React.Component {

	render() {
		return (
			<div className="page-content">
				<div className="page-container">
					<p>
						An overview of Industry Certifications and Badges I have obtained throughout my career.
					</p>
				  <br/>
					<img className="certification-img-container" src={OCABadge}/>
				</div>
			</div>
		);
	}
}
