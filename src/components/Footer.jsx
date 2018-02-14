import React from 'react';
import PersonalLogoText from '../../images/logos/logo-personal-text.svg';

export default class Header extends React.Component {

	render() {
		return (
			<div className="page-footer">
				<div className="footer-container">
					<div className="footer-item-center">
						<span>
							<object className="personal-logo-container" type="image/svg+xml" data={PersonalLogoText}/>
						</span>
					</div>
				</div>
			</div>);
	}
}
