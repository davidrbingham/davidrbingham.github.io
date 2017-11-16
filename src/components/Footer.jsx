import React from 'react';
import PersonalLogoText from '../../images/logos/logo-personal-text.svg';
import IcebergLogo from '../../images/logos/logo-iceberg.svg';

export default class Header extends React.Component {

	render() {
		return (
			<div className="page-footer">
				<div className="footer-container">
					<div className="footer-item-left">
						<span>
							<object className="iceberg-container" type="image/svg+xml" data={IcebergLogo}/>
						</span>
					</div>
					<div className="footer-item-right">
						<span>
							<object className="personal-logo-container" type="image/svg+xml" data={PersonalLogoText}/>
						</span>
					</div>
				</div>
			</div>);
	}
}
