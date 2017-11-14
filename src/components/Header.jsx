import React from 'react';
import {Link} from 'react-router-dom'

import Resume from '../../resume/resume.html';

import GitHubLogo from '../../images/logos/logo-github.svg';
import LinkedinLogo from '../../images/logos/logo-linkedin.svg';
import TwitterLogo from '../../images/logos/logo-twitter.svg';
import EmailIcon from '../../images/icons/icon-email.svg';

export default class Header extends React.Component {

	render() {
		return (
			<div className="page-header">
				<div className="header-container">
					<div className="header-item">
						<span className="hor-rhythm-1">
							<Link to={'/'}><b>HOME</b></Link>
						</span>
					</div>
					<div className="header-item">
						<span className="hor-rhythm-1">
							<Link to={'/portfolio/education'}><b>EDUCATION</b></Link>
						</span>
					</div>
					<div className="header-item">
						<span className="hor-rhythm-1">
							<Link to={'/portfolio/experience'}><b>EXPERIENCE</b></Link>
						</span>
					</div>
					<div className="header-item">
						<span className="hor-rhythm-1">
							<Link to={'/portfolio/certifications'}><b>CERTIFICATIONS</b></Link>
						</span>
					</div>
					<div className="header-item">
						<span className="hor-rhythm-1">
							<Link to={'/portfolio/development'}><b>WORKING ON</b></Link>
						</span>
					</div>
					<div className="header-item">
						<span className="hor-rhythm-1">
							<b>BLOG</b>
						</span>
					</div>

					<div className="header-item">
						<span className="hor-rhythm-1">
							<img width="25px" height="25px" src={GitHubLogo}/>
						</span>
					</div>
					<div className="header-item">
						<span className="hor-rhythm-1">
							<img width="25px" height="25px" src={LinkedinLogo}/>
						</span>
					</div>
					<div className="header-item">
						<span className="hor-rhythm-1">
							<img width="25px" height="25px" src={TwitterLogo}/>
						</span>
					</div>
					<div className="header-item">
						<span className="hor-rhythm-1">
							<img width="25px" height="25px" src={EmailIcon}/>
						</span>
					</div>
				</div>

				<iframe src="about:blank"
								ref={(frame) => {
									try {
										frame.contentWindow.document.write(Resume.toString());
									} catch (e) {
										console.log(e);
									}
								}}
				/>
			</div>
		);
	}
}
