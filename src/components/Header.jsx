import React from 'react';
import GitHubLogo from '../../images/logos/logo-github.svg';
import LinkedinLogo from '../../images/logos/logo-linkedin.svg';
import TwitterLogo from '../../images/logos/logo-twitter.svg';
import EmailIcon from '../../images/icons/icon-email.svg';

export default class Header extends React.Component {

	render() {
		return (
			<div className="page-header">
				<span className="hor-rhythm-1">
					<b>HOME</b>
				</span>
				<span className="hor-rhythm-1">
					<b>ABOUT ME</b>
				</span>
				<span className="hor-rhythm-1">
					<b>EDUCATION</b>
				</span>
				<span className="hor-rhythm-1">
					<b>WORK EXPERIENCE</b>
				</span>
				<span className="hor-rhythm-1">
					<b>CERTIFICATIONS</b>
				</span>
				<span className="hor-rhythm-1">
					<b>WORKING ON</b>
				</span>

				<span className="hor-rhythm-1">
						<img width="25px" height="25px" src={GitHubLogo}/>
					</span>
				<span className="hor-rhythm-1">
						<img width="25px" height="25px" src={LinkedinLogo}/>
					</span>
				<span className="hor-rhythm-1">
						<img width="25px" height="25px" src={TwitterLogo}/>
					</span>
				<span className="hor-rhythm-1">
						<img width="25px" height="25px" src={EmailIcon}/>
					</span>
			</div>
		);
	}
}
