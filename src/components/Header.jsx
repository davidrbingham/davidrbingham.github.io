import React from 'react';
import {Link} from 'react-router-dom'

import Resume from '../../resume/resume.html';

import GitHubLogo from '../../images/logos/logo-github.svg';
import LinkedinLogo from '../../images/logos/logo-linkedin.svg';
import TwitterLogo from '../../images/logos/logo-twitter.svg';
import ResumeIcon from '../../images/logos/logo-resume.svg';
import EmailIcon from '../../images/icons/icon-email.svg';

export default class Header extends React.Component {

	constructor(props) {
		super(props);
		this.downloadResume = this.downloadResume.bind(this);

		this.state = { iFrameRef: undefined };
	}

	addRefToLocalState = (frame) => {
		try {
			this.setState({
				iFrameRef: frame
			});
		} catch (e) {
			console.log(e);
		}
	};

	downloadResume(){
		this.state.iFrameRef.contentWindow.document.write(Resume.toString());
		this.state.iFrameRef.contentWindow.document.close();
	}

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
							<Link to={'/portfolio/skills'}><b>SKILLS</b></Link>
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
					<div className="header-item">
						<span className="hor-rhythm-1">
							<button className="phony-button" onClick={ this.downloadResume } title="Download Resume">
								<img width="25px" height="25px" src={ResumeIcon}/>
							</button>
						</span>
					</div>
				</div>
				<iframe src="about:blank"
								className="iframe-hidden"
								ref={ this.addRefToLocalState }
				/>
			</div>
		);
	}
}
