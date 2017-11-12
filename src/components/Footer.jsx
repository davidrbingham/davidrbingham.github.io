import React from 'react';
import PersonalLogoText from '../../images/logos/logo-personal-text.svg';

export default class Header extends React.Component {

	render() {
		return (
			<div className="page-footer">
				<span>
					<img width="75px" height="75px" src={PersonalLogoText}/>
				</span>
			</div>
		);
	}
}
